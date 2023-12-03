/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get File
 */

import { CacheableResponse } from "../cache/definition";
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
): Promise<CacheableResponse<string>> => {

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

    return {
        cached: response.cached,
        data: response.data.repository.object.text,
    };
};
