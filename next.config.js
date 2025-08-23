/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    experimental: {
      workerThreads: false,
      cpus: 1
    }
  }

  module.exports = nextConfig