/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description Issue
 */

import { REPOSITORY_PLATFORM, RepositoryEntity } from "@/data/definition/repository/repository";

export const buildIssueUrl = (
    repository: RepositoryEntity,
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/issues`;
    }
    return "";
};
