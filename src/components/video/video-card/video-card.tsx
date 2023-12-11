/**
* @author WMXPY
* @namespace Components_Video_VideoButton
* @description Video Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../../../data/definition/video/video-platform";
import { crossLocaleInternationalization } from "@/dictionary/cross-locale/_intl";
import { videoInternationalization } from "@/dictionary/video/_intl";
import { VIDEO_PROFILE } from "@/dictionary/video/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { logger } from "@/util/log";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../../common/redirection-card";

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

export type VideoVideoCardProps = {

    readonly video: VideoPlatformEntity<VIDEO_PLATFORM_TYPE>;
};

export const VideoVideoCard: React.FC<VideoVideoCardProps> = (
    props: VideoVideoCardProps,
) => {

    const locale = useLocale();
    const format = videoInternationalization.format(locale);

    switch (props.video.platform) {

        case VIDEO_PLATFORM_TYPE.NOT_AVAILABLE: {
            return null;
        }
        case VIDEO_PLATFORM_TYPE.BILIBILI: {

            const link = `https://www.bilibili.com/video/${props.video.identifier}/`;
            return (<RedirectionCard
                full
                size={SIZE.SMALL}
                titleHref={HrefConfig.external(link)}
                title={format.get(VIDEO_PROFILE.BILIBILI)}
                leadTitle={getPrefix(locale, props.video.locale)}
                subtitle={link}
                backgroundIcon={FaBilibili}
            />);
        }
        case VIDEO_PLATFORM_TYPE.YOUTUBE: {

            const link = `https://www.youtube.com/watch?v=${props.video.identifier}`;
            return (<RedirectionCard
                full
                size={SIZE.SMALL}
                titleHref={HrefConfig.external(link)}
                title={format.get(VIDEO_PROFILE.YOUTUBE)}
                leadTitle={getPrefix(locale, props.video.locale)}
                subtitle={link}
                backgroundIcon={FaYoutube}
            />);
        }
    }

    logger.warning("unknown video platform", props.video);
    return null;
};
