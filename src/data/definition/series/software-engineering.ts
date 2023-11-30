/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Software Engineering
 */

import { InternationalizationEntity, UrlEntity } from "../common";
import { SoftwareEngineeringSeriesEpisodeEntity } from "./episode";

export enum SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM {

    GITHUB = "GITHUB",
}

export enum SOFTWARE_ENGINEERING_SERIES_STATUS {

    UPDATING = "UPDATING",
    PAUSED = "PAUSED",
    FINALE = "FINALE",
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
    readonly status: SOFTWARE_ENGINEERING_SERIES_STATUS;

    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;

    readonly episodes: SoftwareEngineeringSeriesEpisodeEntity[];
};
