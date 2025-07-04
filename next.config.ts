import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // Disable default image optimization
    },
    trailingSlash: true, // Add trailing slashes for cleaner static URLs
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Disable TypeScript errors during build
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;