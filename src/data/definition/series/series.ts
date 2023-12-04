/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Series
 */

import { SoftwareEngineeringSeriesEntity } from "./software-engineering";

export enum SERIES_STATUS {

    UPDATING = "UPDATING",
    PAUSED = "PAUSED",
    FINALE = "FINALE",
}

export enum SERIES_TYPE {

    SOFTWARE_ENGINEERING = "SOFTWARE_ENGINEERING",
}

export type SeriesEntitySwitch<T extends SERIES_TYPE> =
    T extends SERIES_TYPE.SOFTWARE_ENGINEERING ? SoftwareEngineeringSeriesEntity :
    never;

export type SeriesEntity<T extends SERIES_TYPE> = {

    readonly identifier: string;

    readonly status: SERIES_STATUS;
    readonly type: T;
} & SeriesEntitySwitch<T>;
