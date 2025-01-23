import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export async function middleware(request: NextRequest) {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  // segment1: segment1 represents the locale.
  // segment2: segment2 represents the hospitalSlug.
  // segments: remaining paths
  const [, segment1, ...segments] = request.nextUrl.pathname.split("/");

  // check if locale is valid
  const isValidLocale = locales.some((item) => item === segment1);

  if (!isValidLocale) {
    // if the user tries to go to a path without using locale, fix that path.
    // segment1 should not be read as locale as it represents where the user wants to go.
    const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
    const remainingPath = [segment1, ...segments].join("/");

    // Get current search parameters
    const searchParams = request.nextUrl.searchParams.toString();
    const searchParamsString = searchParams ? `?${searchParams}` : "";

    return NextResponse.redirect(
      new URL(
        `/${
          localeCookie || defaultLocale
        }/${remainingPath}${searchParamsString}`,
        request.url
      )
    );
  }

  // create intl middleware
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
