/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
