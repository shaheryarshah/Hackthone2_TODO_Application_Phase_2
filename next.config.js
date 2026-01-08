/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Hackthone2_TODO_Application_Phase_2',
  assetPrefix: '/Hackthone2_TODO_Application_Phase_2/',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: false, // 🔥 disables RSC completely
  },
}

module.exports = nextConfig
