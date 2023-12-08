/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Find Locale From URL
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { SUPPORTED_LOCALES } from "../../i18n/config";

export const findLocaleFromReferer = (referer: string): Optional<IETF_LOCALE> => {

    const components: string[] = referer
        .split("/")
        .filter((item) => item.length > 0);

    if (components.length === 0) {
        return Optional.ofEmpty();
    }

    const locale: string = components[0];

    if (SUPPORTED_LOCALES.includes(locale as any)) {
        return Optional.ofAny(locale as any);
    }

    return Optional.ofEmpty();
};

export const findLocaleFromUrl = (url: string): Optional<IETF_LOCALE> => {

    let concatUrl: string = url;
    if (url.startsWith("http://") || url.startsWith("https://")) {

        const splited: string[] = url.split("://");
        if (splited.length < 2) {
            return Optional.ofEmpty();
        }

        concatUrl = splited[1];
    }

    const domainLength: number = concatUrl.indexOf("/");
    return findLocaleFromReferer(concatUrl.slice(domainLength + 1));
};
