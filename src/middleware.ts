/**
 * @author WMXPY
 * @description Middleware
 */

import { LOCALE } from "@sudoo/locale";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const ACCEPTED_LOCALES: LOCALE[] = [
    LOCALE.ENGLISH_UNITED_STATES,
    LOCALE.CHINESE_SIMPLIFIED,
];

const DEFAULT_LOCALE: LOCALE = LOCALE.ENGLISH_UNITED_STATES;
const ENTRY_LOCALE: string = "$default";

const getDefaultLocale = (headers: Headers): string => {

    const acceptLocale: string | undefined =
        headers.get("accept-language")?.split(",")[0];

    if (typeof acceptLocale !== "string") {
        return DEFAULT_LOCALE;
    }

    if (ACCEPTED_LOCALES.includes(acceptLocale as LOCALE)) {
        return acceptLocale;
    }

    return DEFAULT_LOCALE;
};

export async function middleware(request: NextRequest) {

    if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
        return;
    }

    if (request.nextUrl.locale === ENTRY_LOCALE) {

        const locale: string =
            request.cookies.get("NEXT_LOCALE")?.value || getDefaultLocale(request.headers);

        return NextResponse.redirect(
            new URL(
                `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
                request.url,
            ),
        );
    }
}
