import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, slug, excerpt, date }) => {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold">
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h2>
      <p className="mt-2 text-gray-600">{excerpt}</p>
      <p className="mt-4 text-sm text-gray-500">{date}</p>
    </div>
  );
};

export default PostCard;