import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Home - Next.js Blog System',
  description: 'Welcome to the Next.js Blog System, a user-driven blog platform with authentication and admin moderation features.',
  keywords: ['blog', 'next.js', 'authentication', 'admin', 'SEO'],
  openGraph: {
    title: 'Next.js Blog System',
    description: 'A user-driven blog platform with authentication and admin moderation features.',
    url: 'https://yourwebsite.com',
    siteName: 'Next.js Blog System',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Next.js Blog System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold">Welcome to the Next.js Blog System</h1>
        <p className="mt-4 text-lg">
          This is a user-driven blog platform where you can read, write, and manage blog posts.
        </p>
      </main>
      <Footer />
    </>
  );
}