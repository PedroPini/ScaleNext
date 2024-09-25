import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Redis and rate limiter
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
});

// Define protected routes and APIs
const isProtectedRoute = createRouteMatcher(['/csr(.*)', '/ssr(.*)']);
// const isProtectedApiRoute = createRouteMatcher(['/api/webhook(.*)', '/api/stripe(.*)']);
const urlsToRateLimit = ['/api/one', '/api/two'];

// Main middleware function
export default clerkMiddleware(async (auth, req) => {
  // Check for protected routes and apply Clerk authentication
//   || isProtectedApiRoute(req)
  if (isProtectedRoute(req) ) {
    auth().protect();
  }

  // Apply rate limiting to specific API routes
  const request = req instanceof NextRequest ? req : new NextRequest(req);
  if (urlsToRateLimit.some((url) => request.url.includes(url))) {
    const ip = request.ip ?? '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.redirect(new URL('/blocked', request.url));
    }
  }


});

// Export the matcher configuration
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
