import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

/**
 * 1. Flat URL permanent 301 redirects:
 *    /services/:slug → /:slug
 *    /mumbai/:slug   → /:slug-in-mumbai
 *    /new-york/:slug → /:slug-in-new-york
 *    /portfolio      → /work
 *
 * 2. Admin gate: /admin pages require valid signed session.
 */
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Permanent 301 redirects for nested to flat URL conversion
  if (pathname.startsWith("/services/")) {
    const slug = pathname.slice("/services/".length);
    if (slug) {
      return NextResponse.redirect(new URL(`/${slug}${search}`, request.url), 301);
    }
  }

  if (pathname.startsWith("/mumbai/")) {
    const slug = pathname.slice("/mumbai/".length);
    if (slug) {
      return NextResponse.redirect(new URL(`/${slug}-in-mumbai${search}`, request.url), 301);
    }
  }

  if (pathname.startsWith("/new-york/")) {
    const slug = pathname.slice("/new-york/".length);
    if (slug) {
      return NextResponse.redirect(new URL(`/${slug}-in-new-york${search}`, request.url), 301);
    }
  }

  if (pathname === "/portfolio") {
    return NextResponse.redirect(new URL(`/work${search}`, request.url), 301);
  }

  // 2. Gate every /admin page behind a valid signed session
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return NextResponse.next();

    const secret = process.env.ADMIN_SESSION_SECRET;
    const token = request.cookies.get(ADMIN_COOKIE)?.value;

    if (secret && (await verifySessionToken(token, secret))) {
      return NextResponse.next();
    }

    const loginUrl = new URL("/admin/login", request.url);
    if (pathname !== "/admin") loginUrl.searchParams.set("next", pathname + search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/services/:slug+",
    "/mumbai/:slug+",
    "/new-york/:slug+",
    "/portfolio",
  ],
};
