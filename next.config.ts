import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable webpack worker to fix Jest worker error
  webpack: (config) => {
    config.parallelism = 1;
    return config;
  },
  // Force single-threaded compilation
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;
