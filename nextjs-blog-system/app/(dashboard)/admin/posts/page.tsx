import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPosts, deletePost } from '@/lib/db';
import ModerationPanel from '@/components/admin/ModerationPanel';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Blog Posts</h1>
      <ModerationPanel posts={posts} onDelete={handleDelete} />
    </div>
  );
}