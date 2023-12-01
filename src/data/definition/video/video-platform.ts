/**
 * @author WMXPY
 * @namespace Data_Definition_Video
 * @description Video Platform
 */

import { IETF_LOCALE } from "@sudoo/locale";

export enum VIDEO_PLATFORM_TYPE {

    NOT_AVAILABLE = "NOT_AVAILABLE",

    BILIBILI = "BILIBILI",
    YOUTUBE = "YOUTUBE",
}

export type VideoPlatformEntity<T extends VIDEO_PLATFORM_TYPE> = {

    readonly platform: T;
} & VideoPlatformEntitySwitch<T>;

export type VideoPlatformEntitySwitch<T extends VIDEO_PLATFORM_TYPE> =
    T extends VIDEO_PLATFORM_TYPE.NOT_AVAILABLE ? {
        readonly platform: VIDEO_PLATFORM_TYPE.NOT_AVAILABLE;
    }
    : {
        readonly platform: T;
        readonly identifier: string;
        readonly locale: IETF_LOCALE;
    };
