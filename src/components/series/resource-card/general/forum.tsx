/**
* @author WMXPY
* @namespace Components_Series_ResourceCard_General
* @description Forum
*/

import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../../../common/redirection-card";

export type SeriesResourceCardGeneralForumProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly seriesFormat: SudooFormat<SERIES_PROFILE>;

    readonly size?: SIZE;
    readonly className?: string;
};

export const SeriesResourceCardGeneralForum: React.FC<SeriesResourceCardGeneralForumProps> = (
    props: SeriesResourceCardGeneralForumProps,
) => {

    return (
        <RedirectionCard
            title={props.seriesFormat.get(SERIES_PROFILE.FORUM)}
            titleHref={HrefConfig.external(props.series.forum.url)}
            size={props.size}
            className={props.className}
        />
    );
};
