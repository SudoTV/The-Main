/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Episode Transcript
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { getGithubFile } from "../github/get-file";

export const requestSeriesEpisodeTranscript = async (
    seriesName: string,
    episodeName: string,
    locale: IETF_LOCALE,
): Promise<string> => {

    const episodeTranscript: string = await getGithubFile(
        "SudoTV",
        "SudoTV-Series-DB",
        "main",
        ["series", seriesName, "transcripts", episodeName, `${locale}.md`],
    );

    return episodeTranscript;
};