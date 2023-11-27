/**
 * @author WMXPY
 * @namespace I18N
 * @description Config
 */

import { LOCALE } from "@sudoo/locale";

export const i18n = {
    defaultLocale: LOCALE.ENGLISH_UNITED_STATES,
    locales: [
        LOCALE.ENGLISH_UNITED_STATES,
        LOCALE.CHINESE_SIMPLIFIED,
    ],
};

export type Locale = (typeof i18n)["locales"][number];
