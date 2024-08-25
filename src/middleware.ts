// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/home", request.url));
// }

import createMiddleware from "next-intl/middleware";
import { configs } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: configs.locales,

  // Used when no locale matches
  defaultLocale: "en",
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/(en|bn)/:path*"],
};
