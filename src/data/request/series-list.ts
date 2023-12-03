/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series List
 */

import { load } from "js-yaml";
import { CACHED_TYPE, CacheableResponse, CachedComponent } from "../cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";
import { getGithubFolder } from "../github/get-folder";

export const requestSeriesList = async (
): Promise<CacheableResponse<Array<SeriesEntity<SERIES_TYPE>>>> => {

    const cachedComponents: CachedComponent[] = [];
    const noneCachedComponents: CachedComponent[] = [];

    const folderFiles = await getGithubFolder(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series"],
    );

    if (folderFiles.cached === CACHED_TYPE.FULL
        || folderFiles.cached === CACHED_TYPE.PARTIAL) {
        cachedComponents.push({
            identifier: "series-list",
        });
    } else {
        noneCachedComponents.push({
            identifier: "series-list",
        });
    }

    const pendingRequests: Array<Promise<CacheableResponse<string>>> = [];
    for (const file of folderFiles.data) {

        pendingRequests.push(getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["series", file.name, "metadata.yml"],
        ));
    }

    const seriesRawMetadataList: Array<CacheableResponse<string>> = await Promise.all(pendingRequests);

    const seriesResult: Array<SeriesEntity<SERIES_TYPE>> = [];
    for (const seriesRawMetadata of seriesRawMetadataList) {

        const series: SeriesEntity<SERIES_TYPE> = load(
            seriesRawMetadata.data,
        ) as SeriesEntity<SERIES_TYPE>;

        if (seriesRawMetadata.cached === CACHED_TYPE.FULL
            || seriesRawMetadata.cached === CACHED_TYPE.PARTIAL) {
            cachedComponents.push({
                identifier: `series:${series.identifier}`,
            });
        } else {
            noneCachedComponents.push({
                identifier: `series:${series.identifier}`,
            });
        }

        seriesResult.push(series);
    }

    return {
        cached: noneCachedComponents.length === 0
            ? CACHED_TYPE.FULL
            : cachedComponents.length === 0
                ? CACHED_TYPE.NONE
                : CACHED_TYPE.PARTIAL,
        cachedComponents,
        data: seriesResult,
    };
};
