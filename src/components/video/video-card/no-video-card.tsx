/**
* @author WMXPY
* @namespace Components_Video_VideoButton
* @description No Video Card
*/

import * as React from "react";
import { videoInternationalization } from "../../../dictionary/video/_intl";
import { VIDEO_PROFILE } from "../../../dictionary/video/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { SIZE } from "../../../util/size";
import { RedirectionCard } from "../../common/redirection-card";

export type VideoNoVideoCardProps = {
};

export const VideoNoVideoCard: React.FC<VideoNoVideoCardProps> = (
    _props: VideoNoVideoCardProps,
) => {

    const locale = useLocale();
    const format = videoInternationalization.format(locale);

    return <RedirectionCard
        full
        size={SIZE.SMALL}
        title={format.get(VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_TITLE)}
        subtitle={format.get(VIDEO_PROFILE.WE_DO_NOT_HAVE_A_VIDEO_YET_DESCRIPTION)}
    />;
};
