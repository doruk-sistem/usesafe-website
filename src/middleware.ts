import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const [, segment1, ...segments] = request.nextUrl.pathname.split("/");
  const isValidLocale = locales.includes(segment1 as "en" | "tr");

  if (!isValidLocale) {
    const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
    const remainingPath = [segment1, ...segments].join("/");
    const searchParams = request.nextUrl.searchParams.toString();
    const searchParamsString = searchParams ? `?${searchParams}` : "";

    return NextResponse.redirect(
      new URL(
        `/${localeCookie || defaultLocale}/${remainingPath}${searchParamsString}`,
        request.url,
      ),
    );
  }

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    "/((?!_next|api|admin|.*\\.).*)",
  ],
};
