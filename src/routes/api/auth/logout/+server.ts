import { json } from '@sveltejs/kit';
import { JWT_COOKIE_TOKEN_NAME } from '$env/static/private';

export async function POST({ cookies, locals }: { cookies: any, locals: any }) {
	locals.user = null;

	const cookieOptions = {
		path: '/api',
		secure: process.env.NODE_ENV !== 'development'
	};

	// Fetch the token from the database
	const token = await prisma.token.findUnique({
		where: {
			tokenValue: cookies.get(JWT_COOKIE_TOKEN_NAME),
		},
	});

	// invalid the recived token in db
	if (token && token.valid) {
		const invalidToken = await prisma.token.updateMany({
			where: {
				tokenValue: cookies.get(JWT_COOKIE_TOKEN_NAME),
			},
			data: {
				valid: false,
			},
		});

		// delete cookies
		cookies.delete(JWT_COOKIE_TOKEN_NAME, cookieOptions);
		cookies.delete('logged-in', cookieOptions);
	} else {
		return json({ message: 'failed to logout' }, { status: 500 });
	}

	return json({ status: 'success' });
}
