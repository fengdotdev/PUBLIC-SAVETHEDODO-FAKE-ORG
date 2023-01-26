/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {

  reactStrictMode: true,
  images: {
    unoptimized: true
    
  },
  basePath: "/PUBLIC-SAVETHEDODO-FAKE-ORG",
  assetPrefix: isProd ? '.' : undefined,
};

module.exports = nextConfig;
