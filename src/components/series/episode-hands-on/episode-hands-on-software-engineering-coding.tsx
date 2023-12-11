/**
* @author WMXPY
* @namespace Components_Series_EpisodeHandsOn
* @description Episode Hands On Software Engineering Coding
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../../common/redirection-card";
import { Header2 } from "../../typography/header-2";
import { Section } from "../../typography/section";

export type SeriesEpisodesHandsOnSoftwareEngineeringCodingProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;
};

export const SeriesEpisodesHandsOnSoftwareEngineeringCoding: React.FC<SeriesEpisodesHandsOnSoftwareEngineeringCodingProps> = (
    props: SeriesEpisodesHandsOnSoftwareEngineeringCodingProps,
) => {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);

    const series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING> = props.series;
    const episode: EpisodeEntity<EPISODE_TYPE.CODING> = props.episode;

    return (<Section
        marginTop
        className="flex flex-col gap-4"
    >
        <Header2
            noMargin
        >
            {seriesFormat.get(SERIES_PROFILE.GET_HANDS_ON)}
        </Header2>
        <RedirectionCard
            full
            size={SIZE.SMALL}
            title={seriesFormat.get(SERIES_PROFILE.LEARN_THE_BASICS)}
            titleHref={HrefConfig.withinSite(
                locale,
                "series",
                series.identifier,
                "episode",
                episode.identifier,
                "learn-the-basics",
            )}
            subtitle={seriesFormat.get(SERIES_PROFILE.LEARN_THE_BASICS_DESCRIPTION)}
        />
        <RedirectionCard
            full
            size={SIZE.SMALL}
            title={seriesFormat.get(SERIES_PROFILE.PREPARE_ENVIRONMENT)}
            titleHref={HrefConfig.withinSite(
                locale,
                "series",
                series.identifier,
                "episode",
                episode.identifier,
                "prepare-environment",
            )}
            subtitle={seriesFormat.get(SERIES_PROFILE.PREPARE_ENVIRONMENT_DESCRIPTION)}
        />
        <RedirectionCard
            full
            size={SIZE.SMALL}
            title={seriesFormat.get(SERIES_PROFILE.DEEP_DIVE)}
            titleHref={HrefConfig.withinSite(
                locale,
                "series",
                series.identifier,
                "episode",
                episode.identifier,
                "deep-dive",
            )}
            subtitle={seriesFormat.get(SERIES_PROFILE.DEEP_DIVE_DESCRIPTION)}
        />
    </Section>);
};
