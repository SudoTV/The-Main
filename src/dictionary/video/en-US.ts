/**
 * @author WMXPY
 * @namespace Dictionary_Video
 * @description English United States
 */

import { PROFILE } from "@sudoo/internationalization";
import { VIDEO_PROFILE } from "./_profile";

export const profile_video_en_US: PROFILE<VIDEO_PROFILE> = {

    [VIDEO_PROFILE.BILIBILI]: "BiliBili",
    [VIDEO_PROFILE.YOUTUBE]: "YouTube",
    [VIDEO_PROFILE.WATCH_ON]: "Watch on",
    [VIDEO_PROFILE.WATCH_WITH_ON_1]: "Watch with {} on",
    [VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_TITLE]: "Video for this episode is not ready yet",
    [VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_DESCRIPTION]: "We are working on it, please stay tuned.",
};
