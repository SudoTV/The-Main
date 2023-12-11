/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Generate Alternates
 */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { SUPPORTED_LOCALES } from "@/i18n/config";
import { findLocaleFromHeaders } from "./find-locale-from-headers";
import { findUrlFromHeaders } from "./find-url-from-header";

export const generateAlternates = (): Metadata["alternates"] => {

    const headersList: Headers = headers();

    const url = findUrlFromHeaders(headersList);
    const locale = findLocaleFromHeaders(headersList);

    return {
        canonical: url,
        languages: SUPPORTED_LOCALES.reduce<Record<string, string>>((previous: Record<string, string>, current: string) => {

            const fixedUrl: string = locale.exists
                ? url.replace(locale.getOrThrow(), current)
                : url;

            return {
                ...previous,
                [current]: fixedUrl,
            };
        }, {}),
    };
};
