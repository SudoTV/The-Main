/**
* @author WMXPY
* @namespace Components_Series_PrepareEnvironment
* @description Article
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SeriesEpisodePrepareEnvironmentCodingArticle } from "./coding/article";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";

export type SeriesEpisodePrepareEnvironmentArticleProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;
};

export const SeriesEpisodePrepareEnvironmentArticle: React.FC<SeriesEpisodePrepareEnvironmentArticleProps> = (
    props: SeriesEpisodePrepareEnvironmentArticleProps,
) => {

    switch (props.episode.type) {

        case EPISODE_TYPE.CODING: {

            return (<SeriesEpisodePrepareEnvironmentCodingArticle
                series={props.series}
                episode={props.episode}
            />);
        }
    }
};
