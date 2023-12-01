/**
 * @author WMXPY
 * @namespace Util
 * @description Format Date
 */

import { IETF_LOCALE } from "@sudoo/locale";

export enum FORMAT_DATE_DATE_FORMAT {

    SHORT = "SHORT",
    MEDIUM = "MEDIUM",
    LONG = "LONG",
    FULL = "FULL",
}

export enum FORMAT_DATE_TIME_FORMAT {

    SHORT = "SHORT",
    MEDIUM = "MEDIUM",
    LONG = "LONG",
    FULL = "FULL",
}

export type FormatDateConfig = {

    readonly dateFormat?: FORMAT_DATE_DATE_FORMAT;
    readonly timeFormat?: FORMAT_DATE_TIME_FORMAT;
};

export const formatDate = (
    date: Date,
    locale: IETF_LOCALE,
    config: FormatDateConfig = {},
): string => {

    const formattedDate = new Intl.DateTimeFormat(locale,
        {
            dateStyle: config.dateFormat
                ? config.dateFormat.toLowerCase() as any
                : undefined,
            timeStyle: config.timeFormat
                ? config.timeFormat.toLowerCase() as any
                : undefined,
        },
    ).format(date);

    return formattedDate;
};
