/**
 * @author WMXPY
 * @namespace Data_Definition_Episode
 * @description Episode
 */

import { InternationalizationEntity } from "../common";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../video/video-platform";
import { EpisodeEntitySwitchCoding } from "./coding";
import { EpisodeEntitySwitchConsoleGaming } from "./console-gaming";

export enum EPISODE_TYPE {

    CODING = "CODING",
    CONSOLE_GAMING = "CONSOLE_GAMING",
}

export type EpisodeEntity<T extends EPISODE_TYPE> = {

    readonly identifier: string;
    readonly premiered: boolean;
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
    T extends EPISODE_TYPE.CONSOLE_GAMING ? EpisodeEntitySwitchConsoleGaming :
    never;
