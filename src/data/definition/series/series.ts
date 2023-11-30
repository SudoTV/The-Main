/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Series
 */

import { InternationalizationEntity, UrlEntity } from "../common";
import { SeriesEpisodeEntity } from "./episode";

export enum SERIES_REPOSITORY_PLATFORM {

    GITHUB = "GITHUB",
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
