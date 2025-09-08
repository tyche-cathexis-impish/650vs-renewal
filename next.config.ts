import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable webpack worker to fix Jest worker error
  webpack: (config) => {
    config.parallelism = 1;
    // Enable webpack optimizations
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize = true;
    }
    return config;
  },
  // Force single-threaded compilation
  experimental: {
    workerThreads: false,
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
