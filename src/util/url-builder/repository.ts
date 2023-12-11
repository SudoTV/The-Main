/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description Repository
 */

import { REPOSITORY_PLATFORM, RepositoryEntity } from "@/data/definition/repository/repository";

export const buildRepositoryUrl = (
    repository: RepositoryEntity,
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}`;
    }
    return "";
};

export const buildRepositoryForkUrl = (
    repository: RepositoryEntity,
    newOwner: string,
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${newOwner}/${repository.repository}`;
    }
    return "";
};
