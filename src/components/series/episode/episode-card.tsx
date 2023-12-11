/**
* @author WMXPY
* @namespace Components_Series_Episode
* @description Episode Card
*/

import * as React from "react";
import { IconType } from "react-icons";
import { FaClipboardQuestion, FaCode } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { useLocale } from "@/i18n/use-locale";
import { FORMAT_DATE_DATE_FORMAT, formatDate } from "@/util/format-date";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../../common/redirection-card";

const getBackgroundIcon = (type: EPISODE_TYPE): IconType => {

    switch (type) {

        case EPISODE_TYPE.CODING:
            return FaCode;
        case EPISODE_TYPE.CONSOLE_GAMING:
            return IoGameController;
    }
    return FaClipboardQuestion;
};

export type SeriesEpisodeCardProps = {

    readonly seriesIdentifier: string;
    readonly episode: EpisodeEntity<EPISODE_TYPE>;
};

export const SeriesEpisodeCard: React.FC<SeriesEpisodeCardProps> = (
    props: SeriesEpisodeCardProps,
) => {

    const locale = useLocale();

    return (<RedirectionCard
        full
        size={SIZE.SMALL}
        title={props.episode.title[locale]}
        titleHref={HrefConfig.withinSite(locale, "series", props.seriesIdentifier, "episode", props.episode.identifier)}
        leadTitle={props.episode.identifier}
        subtitle={formatDate(
            props.episode["release-date"],
            locale,
            {
                dateFormat: FORMAT_DATE_DATE_FORMAT.FULL,
            },
        )}
        backgroundIcon={getBackgroundIcon(props.episode.type)}
    />);
};
