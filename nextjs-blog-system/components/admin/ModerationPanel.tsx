import React, { useEffect, useState } from 'react';
import { fetchPosts, moderatePost } from '@/lib/db';
import { Post } from '@/types';

const ModerationPanel: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const handleModerate = async (postId: string, action: 'approve' | 'reject') => {
    await moderatePost(postId, action);
    setPosts(posts.filter(post => post.id !== postId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Moderation Panel</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">Title</th>
            <th className="border-b p-4 text-left">Status</th>
            <th className="border-b p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td className="border-b p-4">{post.title}</td>
              <td className="border-b p-4">{post.status}</td>
              <td className="border-b p-4">
                <button
                  onClick={() => handleModerate(post.id, 'approve')}
                  className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleModerate(post.id, 'reject')}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModerationPanel;