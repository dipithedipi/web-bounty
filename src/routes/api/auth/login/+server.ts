import { LoginUserSchema, type LoginUserInput } from '$lib/validations/user.schema.js';
import { json } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { prisma } from '$lib/server/prisma.js';
import bcrypt from 'bcryptjs';
import { signJWT } from '$lib/server/token.js';
import { JWT_EXPIRES_IN } from '$env/static/private';

export async function POST({ request, cookies }: { request: Request, cookies: { set: (name: string, value: string, options?: any) => void } }) {
	try {
		const body = (await request.json()) as LoginUserInput;
		const data = LoginUserSchema.parse(body);

		const user = await prisma.user.findUnique({
			where: { email: data.email },
			include: { password: true }
		});

		if (!user) {
			return json(
				{ message: 'Invalid email' }, 
				{ status: 401 }
			);
		}

		// aggiungere la ricerca di un jwt gia' esistente
		// se esiste, invalidarlo e crearne uno nuovo

		const passwordMatch = await bcrypt.compare(data.password, user.password.hashed);
		if (!passwordMatch) {
			return json(
				{ message: 'Invalid password' }, 
				{ status: 401 }
			);
		}

		const jwtToken = await signJWT(
			{ sub: user.id }, 
			{ exp: `${JWT_EXPIRES_IN}m` }
		);

		const jwtTokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;

		const cookieOptions = {
			httpOnly: true,
			path: '/api',
			secure: process.env.NODE_ENV !== 'development',
			maxAge: jwtTokenMaxAge
		};

		cookies.set('jwtToken', jwtToken, cookieOptions);
		cookies.set('logged-in', 'true', {
			...cookieOptions,
			httpOnly: false
		});

		return json({ jwtToken });
	} catch (error: any) {
		if (error instanceof ZodError) {
			return json({ message: 'failed validations', error: error.flatten() }, { status: 400 });
		}

		return json({ message: error.message }, { status: 500 });
	}
}
