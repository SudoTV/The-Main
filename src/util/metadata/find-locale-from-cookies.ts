/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Find Locale From Cookies
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { SUPPORTED_LOCALES } from "../../i18n/config";

const PREFERRED_LOCALE_COOKIE: string = "preferred-locale";

export const findLocaleFromCookies = (cookies: ReadonlyRequestCookies): Optional<IETF_LOCALE> => {

    const locale = cookies.get(PREFERRED_LOCALE_COOKIE);

    if (typeof locale === "undefined") {
        return Optional.ofEmpty();
    }

    if (SUPPORTED_LOCALES.includes(locale.value as IETF_LOCALE)) {
        return Optional.ofAny(
            locale.value as IETF_LOCALE,
        );
    }

    return Optional.ofEmpty();
};
