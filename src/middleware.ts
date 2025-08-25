import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const handleI18nRouting = createMiddleware({
    locales: ["en"],
    defaultLocale: "en",
    localePrefix: "never"
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    "/((?!_next|api|admin|.*\\.).*)",
  ],
};
