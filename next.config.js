/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  distDir: ".next",
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
