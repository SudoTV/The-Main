/**
 * @author WMXPY
 * @namespace Data_Definition_Product
 * @description Product
 */

import { InternationalizationEntity, UrlEntity } from "../common";

export enum PRODUCT_TYPE {

    WEBSITE = "WEBSITE",
}

export type ProductEntity<T extends PRODUCT_TYPE> = {

    readonly identifier: string;
    readonly type: T;
    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;
    readonly link: UrlEntity;
};
