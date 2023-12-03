/**
 * @author WMXPY
 * @namespace Data_Cache
 * @description Definition
 */

export type CacheableResponse<T> = {

    readonly cached: boolean;
    readonly data: T;
};
