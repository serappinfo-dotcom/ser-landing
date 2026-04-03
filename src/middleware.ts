import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n";

function getPreferredLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? "";
  // Parse Accept-Language: if Spanish found → es, otherwise → en (default)
  const preferred = acceptLang
    .split(",")
    .map((part) => {
      const [lang] = part.trim().split(";");
      return lang.split("-")[0].toLowerCase();
    })
    .find((lang) => locales.includes(lang as typeof locales[number]));

  return preferred ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, _next internals, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Check if pathname already has a locale prefix
  const localePattern = new RegExp(`^/(${locales.join("|")})(?:/|$)`);
  if (localePattern.test(pathname)) return;

  // Detect locale and redirect
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\..*).*)"],
};
