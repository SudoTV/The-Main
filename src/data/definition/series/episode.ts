/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Episode
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { InternationalizationEntity } from "../common";

export enum SERIES_EPISODE_VIDEO_PLATFORM {

    BILIBILI = "BILIBILI",
    NOT_AVAILABLE = "NOT_AVAILABLE",
}

export type SeriesEpisodePracticeEntity = {

    readonly available: boolean;
};

export type SeriesEpisodeGitEntity = {

    readonly "before-tag": string;
    readonly "after-tag": string;
};

export type SeriesEpisodeVideoEntity = {

    readonly platform: SERIES_EPISODE_VIDEO_PLATFORM;
    readonly identifier?: string;
    readonly locale?: IETF_LOCALE;
};

export type SeriesEpisodeEntity = {

    readonly identifier: string;
    readonly title: InternationalizationEntity;
    readonly practice: SeriesEpisodePracticeEntity;
    readonly git: SeriesEpisodeGitEntity;
    readonly videos: InternationalizationEntity<SeriesEpisodeVideoEntity[]>;
};
