/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Metadata
 */

import { load } from "js-yaml";
import { SERIES_TYPE, SeriesEntity } from "../definition/series/series";
import { getGithubFile } from "../github/get-file";

export const requestSeriesMetadata = async (
    seriesName: string,
): Promise<SeriesEntity<SERIES_TYPE>> => {

    const seriesMetadata: string = await getGithubFile(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series", seriesName, "metadata.yml"],
    );

    const series: SeriesEntity<SERIES_TYPE> =
        load(seriesMetadata) as SeriesEntity<SERIES_TYPE>;

    return series;
};
