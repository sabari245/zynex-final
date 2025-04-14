/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other configurations might be here (like reactStrictMode)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Usually empty for default https port 443
        pathname: '/**', // Allows any path under this hostname
      },
      // Add any other hostnames you might use here later
      // For example:
      // {
      //   protocol: 'https',
      //   hostname: 'another-image-cdn.com',
      //   pathname: '/images/**',
      // },
    ],
  },
};

module.exports = nextConfig;