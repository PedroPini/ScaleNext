
const isDev = process.env.NODE_ENV !== "production";
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
//   reactStrictMode: true,
//   poweredByHeader: false,
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: nextSafe({
//           isDev,
//           contentSecurityPolicy: {
//             "default-src": ["'self'"],
//             "script-src": [
//               "'self'",
//               "'unsafe-inline'",
//               "https://plausible.io/js/script.js", // Analytics
//             ],
//             "img-src": ["'self'", "blob:", "data: https://www.gravatar.com"],
//             "style-src": ["'self'", "'unsafe-inline'"],
//             "connect-src": [
//               "'self'",
//               "https://plausible.io", // Analytics
//             ],
//             // prefetch-src is deprecated
//             // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src
//             "prefetch-src": false,
//           },
//         }),
//       },
//     ];
//   },
});
const combinedConfig = {
    ...nextConfig,
    ...withMDX(nextConfig),
  };
  
  export default combinedConfig;