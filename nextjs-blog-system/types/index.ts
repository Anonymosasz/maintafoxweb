export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'author' | 'reader';
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  category?: string;
};

export type Comment = {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: Date;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};