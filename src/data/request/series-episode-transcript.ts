/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Episode Transcript
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";
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

    if (episodeTranscript.cached === CACHED_TYPE.NONE) {
        return {
            cached: CACHED_TYPE.NONE,
            cachedComponents: [],
            data: episodeTranscript.data,
        };
    }

    return {
        cached: episodeTranscript.cached,
        cachedComponents: [{
            identifier: "episode",
        }],
        data: episodeTranscript.data,
    };
};
