/**
 * @author WMXPY
 * @namespace I18N
 * @description Use Locale
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { headers } from "next/headers";
import { cache } from "react";
import { logger } from "../util/log";
import { findLocaleFromHeaders } from "../util/metadata/find-locale-from-headers";
import { DEFAULT_LOCALE } from "./config";

export const useLocale = cache((): IETF_LOCALE => {

    const headerList: Headers = headers();

    const findResult: Optional<IETF_LOCALE> = findLocaleFromHeaders(headerList);

    if (findResult.exists) {
        return findResult.getOrDefault(DEFAULT_LOCALE);
    }

    logger.warning("No Locale Found from headers, Use Default");
    return DEFAULT_LOCALE;
});
