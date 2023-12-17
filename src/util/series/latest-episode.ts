/**
 * @author WMXPY
 * @namespace Util_Series
 * @description Latest Episode
 */

import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { Optional } from "@sudoo/optional";

export const findLatestEpisode = (
    episodes: Array<EpisodeEntity<EPISODE_TYPE>>,
): Optional<EpisodeEntity<EPISODE_TYPE>> => {

    const sortedEpisodes: Array<EpisodeEntity<EPISODE_TYPE>> = episodes
        .filter((
            episode: EpisodeEntity<EPISODE_TYPE>,
        ) => {
            return episode.premiered;
        })
        .sort((
            a: EpisodeEntity<EPISODE_TYPE>,
            b: EpisodeEntity<EPISODE_TYPE>,
        ) => {
            return b["release-date"].getTime() - a["release-date"].getTime();
        });

    const latestEpisode: Optional<EpisodeEntity<EPISODE_TYPE>> =
        Optional.ofUndefinable(
            sortedEpisodes[0],
        );

    return latestEpisode;
};
