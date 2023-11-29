/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get File
 */

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
): Promise<string> => {

    const response: GetGithubFileGraphQLResponse = await githubGraphql(`
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

    return response.repository.object.text;
};
