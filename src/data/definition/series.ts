/**
 * @author WMXPY
 * @namespace Data_Definition
 * @description Series
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { InternationalizationEntity, UrlEntity } from "./common";

export enum SERIES_REPOSITORY_PLATFORM {

    GITHUB = "GITHUB",
}

export enum SERIES_VIDEO_PLATFORM {

    BILIBILI = "BILIBILI",
    NOT_AVAILABLE = "NOT_AVAILABLE",
}

export enum SERIES_STATUS {

    UPDATING = "UPDATING",
    PAUSED = "PAUSED",
    FINALE = "FINALE",
}

export type SeriesRepositoryEntity = {

    readonly platform: SERIES_REPOSITORY_PLATFORM;
    readonly owner: string;
    readonly repository: string;
};

export type SeriesEpisodePracticeEntity = {

    readonly available: boolean;
};

export type SeriesEpisodeGitEntity = {

    readonly "before-tag": string;
    readonly "after-tag": string;
};

export type SeriesEpisodeVideoEntity = {

    readonly platform: SERIES_VIDEO_PLATFORM;
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

export type SeriesEntity = {

    readonly identifier: string;

    readonly repository: SeriesRepositoryEntity;
    readonly forum: UrlEntity;

    readonly original: boolean;
    readonly status: SERIES_STATUS;

    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;

    readonly episodes: SeriesEpisodeEntity[];
};
