/**
 * @author WMXPY
 * @namespace Data_Definition
 * @description Common
 */

import { IETF_LOCALE } from "@sudoo/locale";

export type UrlEntity = {

    readonly url: string;
};

export type InternationalizationEntity<T = string> = {

    readonly [IETF_LOCALE.ENGLISH_UNITED_STATES]: T;
    readonly [IETF_LOCALE.CHINESE_SIMPLIFIED]: T;
};
