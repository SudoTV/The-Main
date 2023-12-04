/**
 * @author WMXPY
 * @namespace Util_Series
 * @description Sort Series
 */

import { EPISODE_TYPE, EpisodeEntity } from "../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../data/definition/series/series";

const getUpdateTime = (series: SeriesEntity<SERIES_TYPE>): number => {

    switch (series.type) {

        case SERIES_TYPE.SOFTWARE_ENGINEERING: {
            return series.episodes.reduce((
                previous: number,
                current: EpisodeEntity<EPISODE_TYPE>,
            ) => {

                const releaseDate: number = current["release-date"].getTime();

                if (releaseDate > previous) {
                    return releaseDate;
                }
                return previous;
            }, 0);
        }
    }
    return 0;
};

export const sortSeriesFunction = (
    a: SeriesEntity<SERIES_TYPE>,
    b: SeriesEntity<SERIES_TYPE>,
): number => {

    const aTime: number = getUpdateTime(a);
    const bTime: number = getUpdateTime(b);

    if (aTime > bTime) {
        return -1;
    }
    if (aTime < bTime) {
        return 1;
    }
    return 0;
};
