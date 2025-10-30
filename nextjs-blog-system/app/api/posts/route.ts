import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const posts = await db.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    const newPost = await db.post.create({
      data: body,
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}