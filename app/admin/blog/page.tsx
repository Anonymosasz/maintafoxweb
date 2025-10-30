'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PostWithAuthor } from '@/types/blog';

export default function AdminBlogPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [filter, setFilter] = useState<string>('PENDING');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/admin/blog');
    } else if (status === 'authenticated' && session?.user.role !== 'ADMIN') {
      router.push('/');
    }
  }, [status, session, router]);

  useEffect(() => {
    if (session?.user.role === 'ADMIN') {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, session]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts?status=${filter}`);
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (postId: string, newStatus: string, rejectionNote?: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, rejectionNote }),
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  if (session?.user.role !== 'ADMIN') {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand">Blog Moderation</h1>
          <p className="mt-2 text-slate-600">Review and manage blog posts</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          {['PENDING', 'APPROVED', 'REJECTED', 'DRAFT'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-xl px-4 py-2 font-semibold transition-all ${
                filter === status
                  ? 'bg-brand text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="rounded-xl bg-white p-12 text-center shadow-lg">
              <p className="text-slate-600">No {filter.toLowerCase()} posts found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="rounded-xl bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-brand">{post.title}</h2>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          post.status === 'APPROVED'
                            ? 'bg-green-100 text-green-700'
                            : post.status === 'REJECTED'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span>By {post.author.name}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    {post.rejectionNote && (
                      <div className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                        <strong>Rejection Note:</strong> {post.rejectionNote}
                      </div>
                    )}
                  </div>
                  <div className="ml-6 flex gap-2">
                    {post.status === 'PENDING' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(post.id, 'APPROVED')}
                          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => {
                            const note = prompt('Rejection reason:');
                            if (note) handleStatusChange(post.id, 'REJECTED', note);
                          }}
                          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
