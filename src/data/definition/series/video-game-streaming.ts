/**
 * @author WMXPY
 * @namespace Data_Definition_Series
 * @description Video Game Streaming
 */

import { InternationalizationEntity, UrlEntity } from "../common";
import { EPISODE_TYPE, EpisodeEntity } from "../episode/episode";

export type VideoGameStreamingSeriesEntity = {

    readonly identifier: string;

    readonly episodes: Array<EpisodeEntity<EPISODE_TYPE>>;

    readonly "game-name": InternationalizationEntity;
    readonly "game-website": UrlEntity;
};
