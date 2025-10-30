import PostEditor from '@/components/PostEditor';

export const metadata = {
  title: 'Create Post',
  description: 'Create a new blog post',
};

export default function CreateBlogPage() {
  return <PostEditor mode="create" />;
}
