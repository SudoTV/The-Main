/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Series
 */

import { InternationalizationEntity, UrlEntity } from "../common";
import { SoftwareEngineeringSeriesEntity } from "./software-engineering";
import { VideoGameStreamingSeriesEntity } from "./video-game-streaming";

export enum SERIES_STATUS {

    COMING_SOON = "COMING_SOON",
    UPDATING = "UPDATING",
    PAUSED = "PAUSED",
    FINALE = "FINALE",
}

export enum SERIES_TYPE {

    SOFTWARE_ENGINEERING = "SOFTWARE_ENGINEERING",
    VIDEO_GAME_STREAMING = "VIDEO_GAME_STREAMING",
}

export type SeriesEntitySwitch<T extends SERIES_TYPE> =
    T extends SERIES_TYPE.SOFTWARE_ENGINEERING ? SoftwareEngineeringSeriesEntity :
    T extends SERIES_TYPE.VIDEO_GAME_STREAMING ? VideoGameStreamingSeriesEntity :
    never;

export type SeriesEntity<T extends SERIES_TYPE> = {

    readonly identifier: string;
    readonly original: boolean;

    readonly status: SERIES_STATUS;
    readonly type: T;

    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;

    readonly forum: UrlEntity;
} & SeriesEntitySwitch<T>;
