/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series List
 */

import { parse } from "yaml";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";
import { getGithubFolder } from "../github/get-folder";

export const requestSeriesList = async (): Promise<Array<SeriesEntity<SERIES_TYPE>>> => {

    const folderFiles = await getGithubFolder(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series"],
    );

    const seriesResult: Array<SeriesEntity<SERIES_TYPE>> = [];
    for (const file of folderFiles) {

        const seriesRawMetadata: string = await getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["series", file.name, "metadata.yml"],
        );

        const series: SeriesEntity<SERIES_TYPE> = parse(seriesRawMetadata);
        seriesResult.push(series);
    }

    return seriesResult;
};
