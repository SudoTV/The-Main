/**
 * @author WMXPY
 * @namespace I18N
 * @description Config
 */

import { IETF_LOCALE } from "@sudoo/locale";

export const SUPPORTED_LOCALES: IETF_LOCALE[] = [
    IETF_LOCALE.ENGLISH_UNITED_STATES,
    IETF_LOCALE.CHINESE_SIMPLIFIED,
];

export const DEFAULT_LOCALE: IETF_LOCALE = IETF_LOCALE.ENGLISH_UNITED_STATES;

export const i18nConfiguration = {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
};

export type AVAILABLE_LOCALES =
    (typeof i18nConfiguration)["locales"][number];
