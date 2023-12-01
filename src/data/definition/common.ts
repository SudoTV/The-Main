/**
 * @author WMXPY
 * @namespace Data_Definition
 * @description Common
 */

import { IETF_LOCALE } from "@sudoo/locale";

export type UrlEntity = {

    readonly url: string;
};

export type InternationalizationEntity<T = string> =
    Partial<Record<IETF_LOCALE, T>>;
