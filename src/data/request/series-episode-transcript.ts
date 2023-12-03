/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Episode Transcript
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { CacheableResponse } from "../cache/definition";
import { getGithubFile } from "../github/get-file";

export const requestSeriesEpisodeTranscript = async (
    seriesName: string,
    episodeName: string,
    locale: IETF_LOCALE,
): Promise<CacheableResponse<string>> => {

    const episodeTranscript: CacheableResponse<string> = await getGithubFile(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series", seriesName, "transcripts", episodeName, `${locale}.md`],
    );

    return episodeTranscript;
};
