/**
* @author WMXPY
* @namespace Components_Series_Series
* @description All Episodes
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../dictionary/series/_profile";
import { ALERT_TYPE } from "../../alert/definition";
import { PowerAlert } from "../../alert/power-alert";
import { Header2 } from "../../typography/header-2";
import { Section } from "../../typography/section";
import { SeriesEpisodeCard } from "../episode/episode-card";

export type SeriesAllEpisodesProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;

    readonly locale: IETF_LOCALE;
};

export const SeriesAllEpisodes: React.FC<SeriesAllEpisodesProps> = (
    props: SeriesAllEpisodesProps,
) => {

    const seriesFormat = seriesInternationalization.format(props.locale);

    if (props.series.episodes.length === 0) {

        return (
            <PowerAlert
                type={ALERT_TYPE.INFO}
                title={seriesFormat.get(SERIES_PROFILE.NO_EPISODES_YET)}
                description={seriesFormat.get(SERIES_PROFILE.NO_EPISODES_YET_DESCRIPTION)}
                className="w-full"
            />
        );
    }

    return (<Section
        marginTop
    >
        <Header2>
            {seriesFormat.get(SERIES_PROFILE.ALL_EPISODES)}
        </Header2>
        <div
            className="flex flex-col gap-4"
        >
            {props.series.episodes
                .sort((
                    a: EpisodeEntity<EPISODE_TYPE>,
                    b: EpisodeEntity<EPISODE_TYPE>,
                ) => {
                    if (a["release-date"] > b["release-date"]) return 1;
                    if (a["release-date"] < b["release-date"]) return -1;
                    return 0;
                })
                .map((episode) => {
                    return (<SeriesEpisodeCard
                        key={episode.identifier}
                        seriesIdentifier={props.series.identifier}
                        episode={episode}
                    />);
                })}
        </div>
    </Section>);
};
