/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Software Engineering
 */

import { InternationalizationEntity, UrlEntity } from "../common";
import { EPISODE_TYPE, EpisodeEntity } from "../episode/episode";

export enum SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM {

    GITHUB = "GITHUB",
}

export type SoftwareEngineeringSeriesRepositoryEntity = {

    readonly platform: SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM;
    readonly owner: string;
    readonly repository: string;
};

export type SoftwareEngineeringSeriesEntity = {

    readonly identifier: string;

    readonly repository: SoftwareEngineeringSeriesRepositoryEntity;
    readonly forum: UrlEntity;

    readonly original: boolean;

    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;

    readonly episodes: Array<EpisodeEntity<EPISODE_TYPE>>;
};
