import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hash, compare } from 'bcryptjs';

export async function GET(request) {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const { email, password } = await request.json();

  const hashedPassword = await hash(password, 10);
  const newUser = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}