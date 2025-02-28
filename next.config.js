/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: '.next',
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
