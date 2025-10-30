import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';

// Ensure this page runs on Node.js runtime and is never statically generated
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Blog - Maintafox Insights',
  description:
    'Practical guides, benchmarks, and thought leadership on maintenance reliability, CMMS best practices, and digital transformation.',
};

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'APPROVED' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 20,
    });

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <main>
        {/* Hero with gradient and floating elements */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-slate-900 text-white">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-[120px] animate-pulse" />
            <div
              className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500 blur-[120px] animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>

          <div className="container-12 relative py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Knowledge Hub
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight">
                Maintafox{' '}
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                Practical guides, benchmarks, and thought leadership on maintenance reliability,
                CMMS best practices, and digital transformation across Algerian industries.
              </p>

              <Link
                href="/blog/create"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Write a Post
              </Link>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#f8fafc"
              />
            </svg>
          </div>
        </section>

        {/* Blog posts with staggered cards */}
        <section className="section bg-slate-50">
          <div className="container-12">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-slate-700">No posts yet</h2>
                <p className="mt-2 text-slate-600">Be the first to share your insights!</p>
                <Link
                  href="/blog/create"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                >
                  Create Post
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-2">
                {posts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:-translate-y-2 ${
                      index % 2 === 0 ? 'lg:translate-y-4' : ''
                    }`}
                  >
                    {/* Category badge with gradient */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                        {post.category}
                      </div>
                    </div>

                    {/* Cover Image or Visual header */}
                    {post.coverImage ? (
                      <div className="relative h-48">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative h-48 bg-gradient-to-br from-brand/5 via-accent/5 to-slate-100 p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
                        <div className="relative flex h-full items-end">
                          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-orange-600 shadow-xl">
                            <svg
                              className="h-8 w-8 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-8">
                      <h2 className="text-2xl font-bold text-brand leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-4 flex-1 text-slate-600 leading-relaxed">{post.excerpt}</p>

                      {/* Meta info */}
                      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                })
                              : 'Draft'}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {post.readingTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                          Read more
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA with split design */}
        <section className="section">
          <div className="container-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-dark to-slate-900 p-12 text-white shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 backdrop-blur-sm ring-1 ring-accent/50">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-3xl font-bold">Never miss an insight</h2>
                <p className="mt-4 text-lg text-slate-200">
                  Subscribe to the Maintafox newsletter for maintenance playbooks, industry
                  benchmarking data, and invitations to our exclusive webinar series.
                </p>
                <a
                  href="mailto:contact@maintafox.systems"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl hover:scale-105"
                >
                  Join the newsletter
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
