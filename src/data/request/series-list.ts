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
        ["docs"],
    );

    for (const file of folderFiles) {
        console.log(file);

        const seriesFile: string = await getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["docs", file.name],
        );

        const series: SeriesEntity = parse(seriesFile);
        console.log(series);
    }

    return [];
};
