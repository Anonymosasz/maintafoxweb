import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostBySlug } from '@/lib/db';
import Head from 'next/head';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
        setLoading(false);
      };
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://yourdomain.com/blog/${slug}`} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
};

export default PostPage;