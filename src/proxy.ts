import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * If the URL has no locale prefix, redirect to the default locale.
 * Negotiation: respect the visitor's Accept-Language if it includes "ar".
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static/internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return;
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const accept = req.headers.get("accept-language") ?? "";
  const preferAr = /(^|,)\s*ar\b/i.test(accept);
  const target = preferAr ? "ar" : defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon|sitemap|robots|.*\\..*).*)"],
};
