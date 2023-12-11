/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get File
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";
import { githubGraphql } from "./client";

export type GetGithubFileGraphQLResponse = {

    readonly repository: {
        readonly object: {
            readonly text: string;
        };
    };
};

export const getGithubFile = async (
    owner: string,
    repo: string,
    branch: string,
    paths: string[],
): Promise<CacheableResponse<string | typeof EmptyValueSymbol>> => {

    const response: CacheableResponse<GetGithubFileGraphQLResponse> =
        await githubGraphql(`
        query {
            repository(owner: "${owner}", name: "${repo}") {
                object(expression: "${branch}:${paths.join("/")}") {
                    ... on Blob {
                        text
                    }
                }
            }
        }
    `);

    if (response.data.repository.object === null) {
        return {
            cached: CACHED_TYPE.ERRORED,
            cachedComponents: [],
            data: EmptyValueSymbol,
        };
    }

    if (response.cached === CACHED_TYPE.NONE) {

        return {
            cached: CACHED_TYPE.NONE,
            cachedComponents: [],
            data: response.data.repository.object.text,
        };
    }

    return {
        cached: response.cached,
        cachedComponents: [{
            identifier: `github:${owner}:${repo}:${branch}:${paths.join("/")}`,
        }],
        data: response.data.repository.object.text,
    };
};
