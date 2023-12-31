/**
 * @author WMXPY
 * @namespace Dictionary_Video
 * @description Chinese Simplified
 */

import { PROFILE } from "@sudoo/internationalization";
import { VIDEO_PROFILE } from "./_profile";

export const profile_video_zh_CN: PROFILE<VIDEO_PROFILE> = {

    [VIDEO_PROFILE.BILIBILI]: "哔哩哔哩",
    [VIDEO_PROFILE.YOUTUBE]: "油管",
    [VIDEO_PROFILE.WATCH_ON]: "观看",
    [VIDEO_PROFILE.WATCH_WITH_ON_1]: "观看{}版本",
    [VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_TITLE]: "这一集的视频还没准备好",
    [VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_DESCRIPTION]: "我们正在为这一集制作视频",
};
