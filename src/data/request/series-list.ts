/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series List
 */

import { load } from "js-yaml";
import { CacheableResponse } from "../cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";
import { getGithubFolder } from "../github/get-folder";

export const requestSeriesList = async (
): Promise<CacheableResponse<Array<SeriesEntity<SERIES_TYPE>>>> => {

    const folderFiles = await getGithubFolder(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series"],
    );

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
        seriesResult.push(series);
    }

    return {
        cached: false,
        data: seriesResult,
    };
};
