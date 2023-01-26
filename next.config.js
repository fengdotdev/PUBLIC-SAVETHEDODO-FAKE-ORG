/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {

  reactStrictMode: true,
  images: {
    unoptimized: true
    
  },
  //basePath: "https://fengdotdev.github.io/PUBLIC-SAVETHEDODO-FAKE-ORG",
  assetPrefix: isProd ? 'https://fengdotdev.github.io/PUBLIC-SAVETHEDODO-FAKE-ORG' : undefined,
};

module.exports = nextConfig;
