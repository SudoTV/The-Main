/**
* @author WMXPY
* @namespace Components_Series_PrepareEnvironment_Coding
* @description Article
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SeriesEpisodePrepareEnvironmentCodingForkRepository } from "./fork-repository";
import { SeriesEpisodePrepareEnvironmentCodingPrepareWorkspace } from "./prepare-workspace";

export type SeriesEpisodePrepareEnvironmentCodingArticleProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;
};

export const SeriesEpisodePrepareEnvironmentCodingArticle: React.FC<SeriesEpisodePrepareEnvironmentCodingArticleProps> = (
    props: SeriesEpisodePrepareEnvironmentCodingArticleProps,
) => {

    return (<div>
        <SeriesEpisodePrepareEnvironmentCodingForkRepository
            series={props.series}
            episode={props.episode}
        />
        <SeriesEpisodePrepareEnvironmentCodingPrepareWorkspace
            series={props.series}
            episode={props.episode}
        />
    </div>);
};
