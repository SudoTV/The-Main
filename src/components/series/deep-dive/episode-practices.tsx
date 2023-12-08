/**
* @author WMXPY
* @namespace Components_Series_DeepDive
* @description Episode Practices
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { SeriesDeepDiveEpisodePracticesCoding } from "./episode-practices/coding";

export type SeriesDeepDiveEpisodePracticesProps = {

    readonly episode: EpisodeEntity<EPISODE_TYPE>;

    readonly locale: IETF_LOCALE;
};

export const SeriesDeepDiveEpisodePractices: React.FC<SeriesDeepDiveEpisodePracticesProps> = (
    props: SeriesDeepDiveEpisodePracticesProps,
) => {

    if (props.episode.type !== EPISODE_TYPE.CODING) {
        return null;
    }

    const fixedEpisode: EpisodeEntity<EPISODE_TYPE.CODING> = props.episode as EpisodeEntity<EPISODE_TYPE.CODING>;

    return (<SeriesDeepDiveEpisodePracticesCoding
        episode={fixedEpisode}
        locale={props.locale}
    />);
};
