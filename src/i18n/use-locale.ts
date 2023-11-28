/**
 * @author WMXPY
 * @namespace I18N
 * @description Use Locale
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { headers } from "next/headers";
import { logger } from "../util/log";
import { DEFAULT_LOCALE } from "./config";
import { findLocaleFromHeaders } from "./find-locale-from-headers";

export const useLocale = (): IETF_LOCALE => {

    const headerList: Headers = headers();

    const findResult: Optional<IETF_LOCALE> = findLocaleFromHeaders(headerList);

    if (findResult.exists) {
        return findResult.getOrDefault(DEFAULT_LOCALE);
    }

    logger.warning("No Locale Found from headers, Use Default");
    return DEFAULT_LOCALE;
};
