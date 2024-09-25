
const isDev = process.env.NODE_ENV !== 'production';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    enabled: process.env.ANALYZE === 'true',
   
});

const combinedConfig = withMDX({
    ...nextConfig, 
    images: {
        domains: ['images.unsplash.com'],
    },
    // Spread `nextConfig` into the MDX configuration
});

export default combinedConfig;