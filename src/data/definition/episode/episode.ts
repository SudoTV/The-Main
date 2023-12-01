/**
 * @author WMXPY
 * @namespace Data_Definition_Episode
 * @description Episode
 */

import { InternationalizationEntity } from "../common";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../video/video-platform";
import { EpisodeEntitySwitchCoding } from "./coding";

export enum EPISODE_TYPE {

    CODING = "CODING",
}

export type EpisodeEntity<T extends EPISODE_TYPE> = {

    readonly identifier: string;
    readonly type: T;
    readonly "release-date": Date;
    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;
    readonly videos: InternationalizationEntity<
        Array<VideoPlatformEntity<VIDEO_PLATFORM_TYPE>>
    >;
} & EpisodeEntitySwitch<T>;

export type EpisodeEntitySwitch<T extends EPISODE_TYPE> =
    T extends EPISODE_TYPE.CODING ? EpisodeEntitySwitchCoding :
    never;
