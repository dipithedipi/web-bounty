import { RegisterUserSchema, type RegisterUserInput } from '$lib/validations/user.schema.js';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';
import { prisma } from '$lib/server/prisma';
import { BCRYPT_SALT_ROUNDS } from '$env/static/private';


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
        hashed: hashedPassword,
        salt: salt,
      },
    });

    return json(
      { 
        status: 'success', 
        ...(process.env.NODE_ENV === 'development' ? { data: { ...user, password: undefined } } : {})
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    if (error instanceof ZodError) {
      return json({ message: 'failed validations', error: error.flatten() }, { status: 400 });
    }

    if (error.code === 'P2002') {
      return json(
        { 
          message: 'user with that ' + error.meta.target +' already exists',
          error: error.meta.target,
        }, { status: 409 });
    }

    return json({ message: error.message }, { status: 500 });
  }
}