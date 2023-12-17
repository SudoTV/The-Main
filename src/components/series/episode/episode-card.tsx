/**
* @author WMXPY
* @namespace Components_Series_Episode
* @description Episode Card
*/

import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { episodeInternationalization } from "@/dictionary/episode/_intl";
import { EPISODE_PROFILE } from "@/dictionary/episode/_profile";
import { useLocale } from "@/i18n/use-locale";
import { FORMAT_DATE_DATE_FORMAT, formatDate } from "@/util/format-date";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { IconType } from "react-icons";
import { FaClipboardQuestion, FaCode } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
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

type SubtitleProps = {

    readonly locale: IETF_LOCALE;
} & SeriesEpisodeCardProps;

const Subtitle: React.FC<SubtitleProps> = (
    props: SubtitleProps,
) => {

    if (props.episode.premiered) {
        return formatDate(
            props.episode["release-date"],
            props.locale,
            {
                dateFormat: FORMAT_DATE_DATE_FORMAT.FULL,
            },
        );
    }

    const format = episodeInternationalization.format(props.locale);
    return format.get(EPISODE_PROFILE.EPISODE_WORK_IN_PROGRESS);
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
        titleHref={
            props.episode.premiered
                ? HrefConfig.withinSite(locale, "series", props.seriesIdentifier, "episode", props.episode.identifier)
                : undefined
        }
        leadTitle={props.episode.identifier}
        subtitle={<Subtitle
            locale={locale}
            seriesIdentifier={props.seriesIdentifier}
            episode={props.episode}
        />}
        backgroundIcon={getBackgroundIcon(props.episode.type)}
    />);
};
