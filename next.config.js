/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  }
}

const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();

module.exports = nextConfig
