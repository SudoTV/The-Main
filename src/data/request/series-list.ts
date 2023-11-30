/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series List
 */

import { parse } from "yaml";
import { SeriesEntity } from "../definition/series";
import { getGithubFile } from "../github/get-file";
import { getGithubFolder } from "../github/get-folder";

export const requestSeriesList = async (): Promise<SeriesEntity[]> => {

    const folderFiles = await getGithubFolder(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series"],
    );

    const seriesResult: SeriesEntity[] = [];
    for (const file of folderFiles) {

        const seriesRawMetadata: string = await getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["series", file.name, "metadata.yml"],
        );

        const series: SeriesEntity = parse(seriesRawMetadata);
        seriesResult.push(series);
    }

    return seriesResult;
};
