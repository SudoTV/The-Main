/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series List
 */

import { load } from "js-yaml";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";
import { getGithubFolder } from "../github/get-folder";

export const requestSeriesList = async (
): Promise<Array<SeriesEntity<SERIES_TYPE>>> => {

    const folderFiles = await getGithubFolder(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series"],
    );

    const pendingRequests: Array<Promise<string>> = [];
    for (const file of folderFiles) {

        pendingRequests.push(getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["series", file.name, "metadata.yml"],
        ));
    }

    const seriesRawMetadataList: string[] = await Promise.all(pendingRequests);

    const seriesResult: Array<SeriesEntity<SERIES_TYPE>> = [];
    for (const seriesRawMetadata of seriesRawMetadataList) {
        const series: SeriesEntity<SERIES_TYPE> = load(seriesRawMetadata) as SeriesEntity<SERIES_TYPE>;
        seriesResult.push(series);
    }

    return seriesResult;
};
