/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Software Engineering
 */

import { EPISODE_TYPE, EpisodeEntity } from "../episode/episode";
import { PRODUCT_TYPE, ProductEntity } from "../product/product";

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
    readonly products: Array<ProductEntity<PRODUCT_TYPE>>;

    readonly episodes: Array<EpisodeEntity<EPISODE_TYPE>>;
};
