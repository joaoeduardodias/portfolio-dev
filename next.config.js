/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'images.prismic.io'],
  },
}

module.exports = nextConfig
