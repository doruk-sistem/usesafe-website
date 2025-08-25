import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

export async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["en"],
    defaultLocale: "en",
    localePrefix: "never",
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    "/((?!_next|api|.*\\.).*)",
  ],
};
