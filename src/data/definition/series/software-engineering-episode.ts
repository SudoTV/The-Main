/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Software Engineering Episode
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { InternationalizationEntity } from "../common";

export enum SOFTWARE_ENGINEERING_SERIES_EPISODE_VIDEO_PLATFORM {

    BILIBILI = "BILIBILI",
    NOT_AVAILABLE = "NOT_AVAILABLE",
}

export type SoftwareEngineeringSeriesEpisodePracticeEntity = {

    readonly available: boolean;
};

export type SoftwareEngineeringSeriesEpisodeGitEntity = {

    readonly "before-tag": string;
    readonly "after-tag": string;
};

export type SoftwareEngineeringSeriesEpisodeVideoEntity = {

    readonly platform: SOFTWARE_ENGINEERING_SERIES_EPISODE_VIDEO_PLATFORM;
    readonly identifier?: string;
    readonly locale?: IETF_LOCALE;
};

export type SoftwareEngineeringSeriesEpisodeEntity = {

    readonly identifier: string;
    readonly title: InternationalizationEntity;
    readonly practice: SoftwareEngineeringSeriesEpisodePracticeEntity;
    readonly git: SoftwareEngineeringSeriesEpisodeGitEntity;
    readonly videos: InternationalizationEntity<SoftwareEngineeringSeriesEpisodeVideoEntity[]>;
};
