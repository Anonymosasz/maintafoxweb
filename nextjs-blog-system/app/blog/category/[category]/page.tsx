import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostsByCategory } from '@/lib/db';
import PostList from '@/components/blog/PostList';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      const fetchPosts = async () => {
        const data = await getPostsByCategory(category);
        setPosts(data);
        setLoading(false);
      };

      fetchPosts();
    }
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Posts in "{category}"</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryPage;