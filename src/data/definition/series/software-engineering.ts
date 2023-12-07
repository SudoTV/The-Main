/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Software Engineering
 */

import { EPISODE_TYPE, EpisodeEntity } from "../episode/episode";
import { PRODUCT_TYPE, ProductEntity } from "../product/product";
import { RepositoryEntity } from "../repository/repository";

export type SoftwareEngineeringSeriesEntity = {

    readonly identifier: string;

    readonly repository: RepositoryEntity;
    readonly products: Array<ProductEntity<PRODUCT_TYPE>>;

    readonly episodes: Array<EpisodeEntity<EPISODE_TYPE>>;
};
