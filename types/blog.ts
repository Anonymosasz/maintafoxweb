export type { User, Post, Comment } from '@prisma/client';

export type PostStatus = 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';
export type UserRole = 'READER' | 'AUTHOR' | 'ADMIN';

export interface PostWithAuthor {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  status: PostStatus;
  publishedAt: Date | null;
  rejectionNote: string | null;
  viewCount: number;
  readingTime: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
  _count?: {
    comments: number;
  };
}

export interface CommentWithAuthor {
  id: string;
  content: string;
  approved: boolean;
  postId: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: string;
    name: string;
    image?: string | null;
  };
}

export interface CreatePostInput {
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  status: PostStatus;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {
  id: string;
}

export interface PostFilters {
  status?: PostStatus;
  category?: string;
  authorId?: string;
  search?: string;
}
