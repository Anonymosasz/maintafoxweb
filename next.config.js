/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // App Router by default in Next 14+
  },
};

module.exports = nextConfig;
