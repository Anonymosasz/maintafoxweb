import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

// Force Node.js runtime and dynamic rendering to avoid build-time DB queries
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.maintafox.systems';

  // Get all approved blog posts - with fallback if DB is unavailable
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'APPROVED' },
      select: {
        slug: true,
        updatedAt: true,
      },
    });

    blogUrls = posts.map((post: { slug: string; updatedAt: Date }) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    // Return empty blog URLs if database is unavailable during build
  }

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    {
      url: `${base}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/demo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    ...blogUrls,
  ];
}
