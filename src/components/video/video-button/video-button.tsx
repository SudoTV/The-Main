/**
* @author WMXPY
* @namespace Components_Video_VideoButton
* @description Video Button
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaBilibili, FaYoutube } from "react-icons/fa6";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../../../data/definition/video/video-platform";
import { crossLocaleInternationalization } from "@/dictionary/cross-locale/_intl";
import { videoInternationalization } from "@/dictionary/video/_intl";
import { VIDEO_PROFILE } from "@/dictionary/video/_profile";
import { useLocale } from "@/i18n/use-locale";
import { logger } from "@/util/log";
import { CardLinkButton } from "../../common/card-link-button";

const getPrefix = (currentLocale: IETF_LOCALE, targetLocale?: IETF_LOCALE): string => {

    const videoFormat = videoInternationalization.format(currentLocale);
    const crossLocaleFormat = crossLocaleInternationalization.format(currentLocale);

    if (typeof targetLocale !== "string") {
        return videoFormat.get(VIDEO_PROFILE.WATCH_ON);
    }

    if (currentLocale === targetLocale) {
        return videoFormat.get(VIDEO_PROFILE.WATCH_ON);
    }

    return videoFormat.get(VIDEO_PROFILE.WATCH_WITH_ON_1,
        crossLocaleFormat.get(targetLocale),
    );
};

export type VideoVideoButtonProps = {

    readonly video: VideoPlatformEntity<VIDEO_PLATFORM_TYPE>;
};

export const VideoVideoButton: React.FC<VideoVideoButtonProps> = (
    props: VideoVideoButtonProps,
) => {

    const locale = useLocale();
    const format = videoInternationalization.format(locale);

    switch (props.video.platform) {

        case VIDEO_PLATFORM_TYPE.NOT_AVAILABLE: {
            return null;
        }
        case VIDEO_PLATFORM_TYPE.BILIBILI: {
            return (<CardLinkButton
                icon={FaBilibili}
                href={`https://www.bilibili.com/video/${props.video.identifier}/`}
                prefix={getPrefix(locale, props.video.locale)}
                title={format.get(VIDEO_PROFILE.BILIBILI)}
            />);
        }
        case VIDEO_PLATFORM_TYPE.YOUTUBE: {
            return (<CardLinkButton
                icon={FaYoutube}
                href={`https://www.youtube.com/watch?v=${props.video.identifier}`}
                prefix={getPrefix(locale, props.video.locale)}
                title={format.get(VIDEO_PROFILE.YOUTUBE)}
            />);
        }
    }

    logger.warning("unknown video platform", props.video);
    return null;
};
