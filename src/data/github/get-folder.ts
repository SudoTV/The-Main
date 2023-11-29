/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Get Folder
 */

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
): Promise<GetGithubFolderGraphQLResponseEntry[]> => {

    const response: GetGithubFolderGraphQLResponse = await githubGraphql(`
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

    return response.repository.object.entries;
};
