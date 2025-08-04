import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true, // Required for static export
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
  // Note: Cache headers should be configured at the CDN/server level for static exports
  // Recommended cache settings:
  // - Static assets (fonts, images): max-age=31536000, immutable
  // - HTML files: max-age=3600, must-revalidate
};

export default nextConfig;
