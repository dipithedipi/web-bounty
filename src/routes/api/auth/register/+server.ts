import { RegisterUserSchema, type RegisterUserInput } from '$lib/validations/user.schema.js';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';
import { prisma } from '$lib/server/prisma';
import { BCRYPT_SALT_ROUNDS } from '$env/static/private';
import { signJWT } from '$lib/server/token';

export async function POST({ request }: { request: Request }) {
  try {
    const body = (await request.json()) as RegisterUserInput;
    const data = RegisterUserSchema.parse(body);

    // Genera il salt e l'hash della password
    const salt = bcrypt.genSaltSync(parseInt(BCRYPT_SALT_ROUNDS) || 12);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        phoneNumber: data.phoneNumber,
        email: data.email,
        profilePhoto: data.photo,
        password: {
          create: {
			hashed: hashedPassword,
			salt: salt,
		  },
        },
		tokens: {
			create: {
				tokenValue: await signJWT({ sub: data.email }, { exp: '1h' })
			}
		}
      },
    });

    return json({ status: 'success', data: { ...user, password: undefined } }, { status: 201 });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return json({ message: 'failed validations', error: error.flatten() }, { status: 400 });
    }

    if (error.code === 'P2002') {
      return json({ message: 'user with that email already exists' }, { status: 409 });
    }

    return json({ message: error.message }, { status: 500 });
  }
}