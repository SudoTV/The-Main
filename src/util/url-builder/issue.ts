/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description Issue
 */

import { SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM, SoftwareEngineeringSeriesRepositoryEntity } from "../../data/definition/series/software-engineering";

export const buildIssueUrl = (
    repository: SoftwareEngineeringSeriesRepositoryEntity,
): string => {

    switch (repository.platform) {
        case SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/issues`;
    }
    return "";
};
