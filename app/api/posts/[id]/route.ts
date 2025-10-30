import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const updatePostSchema = z.object({
  title: z.string().min(5).optional(),
  excerpt: z.string().min(20).optional(),
  content: z.string().min(100).optional(),
  coverImage: z.string().url().optional().nullable(),
  category: z.string().min(2).optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(['DRAFT', 'PENDING', 'APPROVED', 'REJECTED']).optional(),
  rejectionNote: z.string().optional().nullable(),
});

// GET /api/posts/[id] - Get single post
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Increment view count
    await prisma.post.update({
      where: { id: params.id },
      data: { viewCount: { increment: 1 } },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// PATCH /api/posts/[id] - Update post
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Only author or admin can update
    if (session.user.role !== 'ADMIN' && post.authorId !== session.user.id) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const body = await req.json();
    const validation = updatePostSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors[0].message }, { status: 400 });
    }

    const data = validation.data;

    // Only admins can approve/reject posts
    if (
      data.status &&
      ['APPROVED', 'REJECTED'].includes(data.status) &&
      session.user.role !== 'ADMIN'
    ) {
      return NextResponse.json(
        { error: 'Only admins can approve or reject posts' },
        { status: 403 }
      );
    }

    // Set publishedAt when approving
    const updateData: any = { ...data };
    if (data.status === 'APPROVED' && !post.publishedAt) {
      updateData.publishedAt = new Date();
    }

    // Recalculate reading time if content changed
    if (data.content) {
      const wordCount = data.content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      updateData.readingTime = `${readingTime} min read`;
    }

    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: updateData,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    // TODO: Send notification emails
    // if (data.status === 'APPROVED') {
    //   await notifyAuthorPostApproved(updatedPost);
    // } else if (data.status === 'REJECTED') {
    //   await notifyAuthorPostRejected(updatedPost);
    // }

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/posts/[id] - Delete post
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Only author or admin can delete
    if (session.user.role !== 'ADMIN' && post.authorId !== session.user.id) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
