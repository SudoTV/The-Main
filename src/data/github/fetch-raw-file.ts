/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Fetch Raw File
 */

import { DependencyDataNotFoundError } from "@/error/dependency/data/not-found";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";

export const fetchGithubRawFile = async (
    owner: string,
    repo: string,
    branch: string,
    paths: string[],
): Promise<string> => {

    const response: Response = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${paths.join('/')}`,
    );

    if (response.status !== HTTP_RESPONSE_CODE.OK) {

        throw DependencyDataNotFoundError.create(
            `Cannot find file: ${paths.join('/')}`,
        );
    }

    const text: string = await response.text();
    return text;
};
