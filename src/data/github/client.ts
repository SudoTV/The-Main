/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Client
 */

import { graphql } from "@octokit/graphql";
import NodeCache from "node-cache";
import { GRAPHQL_GITHUB_API_TOKEN } from "../../util/environment";
import { logger } from "../../util/log";
import { digestMD5String } from "../../util/md5";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";

export const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${GRAPHQL_GITHUB_API_TOKEN.getOrThrow()}`,
    },
});

const cache: NodeCache = new NodeCache();
const CACHE_EXPIRE: number = 60 * 5; // 5 minutes

export const githubGraphql = async <T>(query: string): Promise<CacheableResponse<T>> => {

    const queryHash: string = await digestMD5String(query);

    const cached: T | undefined = cache.get(queryHash);
    if (typeof cached !== "undefined") {

        logger.info(`[Github] Query cache hit: ${queryHash}`);

        return {
            cached: CACHED_TYPE.FULL,
            cachedComponents: [{
                identifier: "query",
            }],
            data: cached,
        };
    }

    logger.info(`[Github] Query cache miss: ${queryHash}`);
    const response: T = await graphqlWithAuth(query);

    cache.set(queryHash, response, CACHE_EXPIRE);

    return {
        cached: CACHED_TYPE.NONE,
        cachedComponents: [],
        data: response,
    };
};
