/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Metadata
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { load } from "js-yaml";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";

export const requestSeriesMetadata = async (
    seriesName: string,
): Promise<CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol>> => {

    const seriesMetadata: CacheableResponse<string | typeof EmptyValueSymbol> = await getGithubFile(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series", seriesName, "metadata.yml"],
    );

    if (seriesMetadata.data === EmptyValueSymbol) {
        return {
            cached: CACHED_TYPE.ERRORED,
            cachedComponents: [],
            data: EmptyValueSymbol,
        };
    }

    const series: SeriesEntity<SERIES_TYPE> =
        load(seriesMetadata.data) as SeriesEntity<SERIES_TYPE>;

    if (seriesMetadata.cached === CACHED_TYPE.NONE) {
        return {
            cached: CACHED_TYPE.NONE,
            cachedComponents: [],
            data: series,
        };
    }

    return {
        cached: seriesMetadata.cached,
        cachedComponents: [{
            identifier: `series:${seriesName}:metadata`,
        }],
        data: series,
    };
};
