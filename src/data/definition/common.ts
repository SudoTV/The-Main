/**
 * @author WMXPY
 * @namespace Data_Definition
 * @description Common
 */

import { IETF_LOCALE } from "@sudoo/locale";

export type UrlEntity = {

    readonly url: string;
};

export type InternationalizationEntity = {

    readonly [IETF_LOCALE.ENGLISH_UNITED_STATES]: string;
    readonly [IETF_LOCALE.CHINESE_SIMPLIFIED]: string;
};
