/**
* @author WMXPY
* @namespace Components_Series_ResourceCard_VideoGameStreaming
* @description Game Site
*/

import { SudooFormat } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../../../common/redirection-card";

export type SeriesResourceCardVideoGameStreamingGameSiteProps = {

    readonly series: SeriesEntity<SERIES_TYPE.VIDEO_GAME_STREAMING>;
    readonly seriesFormat: SudooFormat<SERIES_PROFILE>;

    readonly size?: SIZE;
    readonly className?: string;

    readonly locale: IETF_LOCALE;
};

export const SeriesResourceCardVideoGameStreamingGameSite: React.FC<SeriesResourceCardVideoGameStreamingGameSiteProps> = (
    props: SeriesResourceCardVideoGameStreamingGameSiteProps,
) => {

    const gameName: string = props.series["game-name"][props.locale] as string;

    return (
        <RedirectionCard
            title={props.seriesFormat.get(
                SERIES_PROFILE.GAME_WEBSITE_1,
                gameName,
            )}
            titleHref={HrefConfig.external(props.series["game-website"].url)}
            size={props.size}
            className={props.className}
        />
    );
};
