/**
* @author WMXPY
* @namespace Components_Series_EpisodeHandsOn
* @description Episode Hands On
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { SeriesEpisodesHandsOnSoftwareEngineeringCoding } from "./episode-hands-on-software-engineering-coding";

export type SeriesEpisodesHandsOnProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly episode: EpisodeEntity<EPISODE_TYPE>;
};

export const SeriesEpisodesHandsOn: React.FC<SeriesEpisodesHandsOnProps> = (
    props: SeriesEpisodesHandsOnProps,
) => {

    if (props.series.type === SERIES_TYPE.SOFTWARE_ENGINEERING

        && props.episode.type === EPISODE_TYPE.CODING) {

        return (<SeriesEpisodesHandsOnSoftwareEngineeringCoding
            series={props.series as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>}
            episode={props.episode as EpisodeEntity<EPISODE_TYPE.CODING>}
        />);
    }
};
