/**
 * @author WMXPY
 * @description Middleware
 */

import { match as matchLocale } from "@formatjs/intl-localematcher";
import { IETF_LOCALE } from "@sudoo/locale";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18nConfiguration } from "./i18n/config";

function getLocale(request: NextRequest): string | undefined {

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: IETF_LOCALE[] = i18nConfiguration.locales;

  let languages = new Negotiator({
    headers: negotiatorHeaders,
  }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18nConfiguration.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {

  const pathname: string = request.nextUrl.pathname;
  const search: string = request.nextUrl.search;

  const pathnameIsMissingLocale = i18nConfiguration.locales.every(
    (locale: IETF_LOCALE) => {

      return !pathname.startsWith(`/${locale}/`)
        && pathname !== `/${locale}`;
    },
  );

  if (pathnameIsMissingLocale) {

    const locale = getLocale(request);

    return NextResponse.redirect(new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${search}`,
      request.url,
    ));
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
