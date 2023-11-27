/**
 * @author WMXPY
 * @namespace I18N
 * @description Config
 */

import { LOCALE } from "@sudoo/locale";

export const i18nConfiguration = {
    defaultLocale: LOCALE.ENGLISH_UNITED_STATES,
    locales: [
        LOCALE.ENGLISH_UNITED_STATES,
        LOCALE.CHINESE_SIMPLIFIED,
    ],
};

export type AVAILABLE_LOCALES =
    (typeof i18nConfiguration)["locales"][number];
