import { NextResponse } from 'next/server';
import { getPostById, updatePostById, deletePostById } from '@/lib/db';

export async function GET(request, { params }) {
  const { id } = params;
  const post = await getPostById(id);

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const updatedPost = await updatePostById(id, data);

  if (!updatedPost) {
    return NextResponse.json({ message: 'Post not found or update failed' }, { status: 404 });
  }

  return NextResponse.json(updatedPost);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const deleted = await deletePostById(id);

  if (!deleted) {
    return NextResponse.json({ message: 'Post not found or delete failed' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Post deleted successfully' });
}