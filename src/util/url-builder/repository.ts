/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description Repository
 */

import { SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM, SoftwareEngineeringSeriesRepositoryEntity } from "../../data/definition/series/software-engineering";

export const buildRepositoryUrl = (
    repository: SoftwareEngineeringSeriesRepositoryEntity,
): string => {

    switch (repository.platform) {
        case SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}`;
    }
    return "";
};

export const buildRepositoryForkUrl = (
    repository: SoftwareEngineeringSeriesRepositoryEntity,
    newOwner: string,
): string => {

    switch (repository.platform) {
        case SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${newOwner}/${repository.repository}`;
    }
    return "";
};
