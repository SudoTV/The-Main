/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get Folder
 */

import { CacheableResponse } from "../cache/definition";
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

    return {
        cached: response.cached,
        data: response.data.repository.object.entries,
    };
};
