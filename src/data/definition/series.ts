/**
 * @author WMXPY
 * @namespace Data_Definition
 * @description Series
 */

import { InternationalizationEntity, UrlEntity } from "./common";

export type SeriesEntity = {

    readonly name: string;

    readonly repository: UrlEntity;
    readonly fork: UrlEntity;
    readonly issue: UrlEntity;
    readonly forum: UrlEntity;

    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;
};
