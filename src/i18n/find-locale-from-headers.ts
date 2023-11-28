/**
 * @author WMXPY
 * @namespace I18N
 * @description Find Locale From Header
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { findLocaleFromReferer, findLocaleFromUrl } from "./find-locale-from-url";

export const findLocaleFromHeaders = (header: Headers): Optional<IETF_LOCALE> => {

    const domain = header.get("host") ?? "";
    const fullUrl = header.get("referer") ?? "";
    const [, referer] = fullUrl.match(
        new RegExp(`https?:\/\/${domain}(.*)`),
    ) ?? [];

    const resultFromReferer: Optional<IETF_LOCALE> =
        findLocaleFromReferer(referer ?? "");

    if (resultFromReferer.exists) {
        return resultFromReferer;
    }

    const xUrl: string = header.get("x-url") ?? "";

    return findLocaleFromUrl(xUrl);
};
