/**
 * @author WMXPY
 * @namespace Data_Request
 * @description Series Episode Learn The Basics
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { EmptyValueSymbol } from "@sudoo/symbol";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";
import { getGithubFile } from "../github/get-file";

export const requestSeriesEpisodeLearnTheBasics = async (
    seriesName: string,
    episodeName: string,
    locale: IETF_LOCALE,
): Promise<CacheableResponse<string | typeof EmptyValueSymbol>> => {

    const episodeTranscript: CacheableResponse<string | typeof EmptyValueSymbol> =
        await getGithubFile(
            "SudoTV",
            "SudoTV-Series-DB",
            "main",
            ["series", seriesName, "learn-the-basics", episodeName, `${locale}.md`],
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
            identifier: `${seriesName}:${episodeName}:${locale}:learn-the-basics`,
        }],
        data: episodeTranscript.data,
    };
};
