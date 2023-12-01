/**
 * @author WMXPY
 * @namespace Data_Definition_Episode
 * @description Episode
 */

import { InternationalizationEntity } from "../common";
import { PracticeEntity } from "../practice/practice";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../video/video-platform";

export type SoftwareEngineeringSeriesEpisodeGitEntity = {

    readonly "before-tag": string;
    readonly "after-tag": string;
};

export type SoftwareEngineeringSeriesEpisodeEntity = {

    readonly identifier: string;
    readonly "release-date": Date;
    readonly title: InternationalizationEntity;
    readonly practices: PracticeEntity[];
    readonly git: SoftwareEngineeringSeriesEpisodeGitEntity;
    readonly videos: InternationalizationEntity<
        Array<VideoPlatformEntity<VIDEO_PLATFORM_TYPE>>
    >;
};
