/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get Folder
 */

import { CACHED_TYPE, CacheableResponse } from "../cache/definition";
import { githubGraphql } from "./client";

export type GetGithubFolderGraphQLResponseEntry = {

    readonly name: string;
};

export type GetGithubFolderGraphQLResponse = {

    readonly repository: {
        readonly object: {
            readonly entries: GetGithubFolderGraphQLResponseEntry[];
        };
    };
};

export const getGithubFolder = async (
    owner: string,
    repo: string,
    branch: string,
    paths: string[],
): Promise<CacheableResponse<GetGithubFolderGraphQLResponseEntry[]>> => {

    const response: CacheableResponse<GetGithubFolderGraphQLResponse> =
        await githubGraphql(`
        query {
            repository(owner: "${owner}", name: "${repo}") {
                object(expression: "${branch}:${paths.join("/")}") {
                    ... on Tree {
                        entries {
                            name
                        }
                    }
                }
            }
        }
    `);

    if (response.cached === CACHED_TYPE.NONE) {
        return {
            cached: CACHED_TYPE.NONE,
            cachedComponents: [],
            data: response.data.repository.object.entries,
        };
    }

    return {
        cached: response.cached,
        cachedComponents: [{
            identifier: "folder",
        }],
        data: response.data.repository.object.entries,
    };
};
