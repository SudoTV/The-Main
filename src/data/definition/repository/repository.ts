/**
 * @author WMXPY
 * @namespace Data_Definition_Repository
 * @description Repository
 */

export enum REPOSITORY_PLATFORM {

    GITHUB = "GITHUB",
}

export type RepositoryEntity = {

    readonly platform: REPOSITORY_PLATFORM;
    readonly owner: string;
    readonly repository: string;
};
