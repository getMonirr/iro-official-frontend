import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { configs } from "./config";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Allow all origins; restrict this in production
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

const intlMiddleware = createMiddleware({
  locales: configs.locales,
  defaultLocale: "en",
});

// Add CORS handling along with the locale handling
export function middleware(request: NextRequest) {
  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return new NextResponse(null, { headers: corsHeaders, status: 204 });
  }

  // Call the next-intl middleware to handle locale-based routing
  const response = intlMiddleware(request);

  // Add CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

// Matcher for applying middleware to specific routes
export const config = {
  matcher: ["/", "/(en|bn)/:path*", "/api/:path*"], // Add "/api/:path*" to apply CORS to API routes
};
