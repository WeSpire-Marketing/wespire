const generateRedirects = require('./generate-redirects')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return generateRedirects()
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.sanity.io', 'i.vimeocdn.com', 'img.youtube.com'],
  },
}

module.exports = nextConfig
