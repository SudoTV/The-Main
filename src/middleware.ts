/**
 * @author WMXPY
 * @description Middleware
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const ACCEPTED_LOCALES = [
    "en-US",
    "zh-CN",
];

const getDefaultLocale = (headers: Headers): string => {

    const acceptLocale: string | undefined =
        headers.get("accept-language")?.split(",")[0];

    if (typeof acceptLocale !== "string") {
        return "en-US";
    }

    if (ACCEPTED_LOCALES.includes(acceptLocale)) {
        return acceptLocale;
    }

    return "en-US";
};

export async function middleware(request: NextRequest) {

    if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
        return;
    }

    if (request.nextUrl.locale === "default") {

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
