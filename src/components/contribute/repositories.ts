/**
 * @author WMXPY
 * @namespace Components_Contribute
 * @description Repositories
 */

import { REPOSITORY_PLATFORM, RepositoryEntity } from "@/data/definition/repository/repository";

export type ContributeAnnotationConfig = {

    readonly repository: RepositoryEntity;

    readonly branch: string;
    readonly paths: string[];
};

export const createTheMainDictionaryRepositoryConfig = (...subpaths: string[]): ContributeAnnotationConfig => {

    return {
        repository: {
            platform: REPOSITORY_PLATFORM.GITHUB,
            owner: "SudoTV",
            repository: "The-Main",
        },
        branch: "main",
        paths: [
            "src",
            "dictionary",
            ...subpaths,
        ],
    };
};

export const createSeriesDBRepositoryConfig = (...paths: string[]): ContributeAnnotationConfig => {

    return {
        repository: {
            platform: REPOSITORY_PLATFORM.GITHUB,
            owner: "SudoTV",
            repository: "SudoTV-Series-DB",
        },
        branch: "main",
        paths,
    };
};
