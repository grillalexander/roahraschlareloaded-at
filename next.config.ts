import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static export, but we'll use proper sizing
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true, // Add trailing slashes for cleaner static URLs
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
