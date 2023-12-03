/**
 * @author WMXPY
 * @namespace Data_Cache
 * @description Definition
 */

export enum CACHED_TYPE {

    FULL = "FULL",
    PARTIAL = "PARTIAL",
    NONE = "NONE",
}

export type CachedComponent = {

    readonly identifier: string;
};

export type CacheableResponse<T> = {

    readonly cached: CACHED_TYPE;
    readonly cachedComponents: CachedComponent[];
    readonly data: T;
};
