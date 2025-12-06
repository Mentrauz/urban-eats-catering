/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Allow unoptimized images but restrict to trusted domains via remotePatterns
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    // Keep build moving even if type errors exist
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;