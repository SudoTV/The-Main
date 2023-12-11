/**
* @author WMXPY
* @namespace Components_Series_Series
* @description Recently Updated
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { HrefConfig } from "@/util/href";
import { PowerLink } from "../../common/power-link";
import { Header2 } from "../../typography/header-2";
import { Section } from "../../typography/section";
import { SeriesEpisodeCard } from "../episode/episode-card";

export type SeriesRecentlyUpdatedProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;

    readonly locale: IETF_LOCALE;
};

export const SeriesRecentlyUpdated: React.FC<SeriesRecentlyUpdatedProps> = (
    props: SeriesRecentlyUpdatedProps,
) => {

    if (props.series.episodes.length === 0) {
        return null;
    }

    const seriesFormat = seriesInternationalization.format(props.locale);

    return (<Section
        marginTop
    >
        <Header2>
            {seriesFormat.get(SERIES_PROFILE.RECENTLY_UPDATED_SERIES)}
        </Header2>
        <div
            className="w-full mt-2 mb-3"
        >
            <PowerLink
                href={HrefConfig.withinSite(
                    props.locale,
                    "series",
                    props.series.identifier,
                    "episodes",
                )}
            >
                {seriesFormat.get(SERIES_PROFILE.VIEW_ALL_EPISODES)}
            </PowerLink>
        </div>
        <div
            className="flex flex-col gap-4"
        >
            {props.series.episodes
                .sort((
                    a: EpisodeEntity<EPISODE_TYPE>,
                    b: EpisodeEntity<EPISODE_TYPE>,
                ) => {
                    if (a["release-date"] > b["release-date"]) return -1;
                    if (a["release-date"] < b["release-date"]) return 1;
                    return 0;
                })
                .slice(0, 10)
                .map((episode: EpisodeEntity<EPISODE_TYPE>) => {
                    return (<SeriesEpisodeCard
                        key={episode.identifier}
                        seriesIdentifier={props.series.identifier}
                        episode={episode}
                    />);
                })}
        </div>
    </Section>);
};
