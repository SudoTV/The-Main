/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description File
 */

import { REPOSITORY_PLATFORM, RepositoryEntity } from "@/data/definition/repository/repository";

export const buildRepositoryFileUrl = (
    repository: RepositoryEntity,
    branch: string,
    paths: string[],
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/blob/${branch}/${paths.join("/")}`;
    }
    return "";
};

export const buildRepositoryFolderUrl = (
    repository: RepositoryEntity,
    branch: string,
    paths: string[],
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/tree/${branch}/${paths.join("/")}`;
    }
    return "";
};

export const buildRepositoryFileEditUrl = (
    repository: RepositoryEntity,
    branch: string,
    paths: string[],
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/edit/${branch}/${paths.join("/")}`;

    }
    return "";
};
