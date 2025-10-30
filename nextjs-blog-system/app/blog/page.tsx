import { useEffect, useState } from 'react';
import PostList from '@/components/blog/PostList';
import { fetchPosts } from '@/lib/db';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <PostList posts={posts} />
    </main>
  );
}