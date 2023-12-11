/**
 * @author WMXPY
 * @namespace Data_Github
 * @description Client
 */

import { GRAPHQL_GITHUB_API_TOKEN } from "@/util/environment";
import { logger } from "@/util/log";
import { digestMD5String } from "@/util/md5";
import { graphql } from "@octokit/graphql";
import NodeCache from "node-cache";
import { cache } from "react";
import { CACHED_TYPE, CacheableResponse } from "../cache/definition";

export const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${GRAPHQL_GITHUB_API_TOKEN.getOrThrow()}`,
    },
});

const nodeCache: NodeCache = new NodeCache();
const CACHE_EXPIRE: number = 60 * 30; // 30 minutes

export const githubGraphql = cache(
    async <T>(query: string): Promise<CacheableResponse<T>> => {

        const queryHash: string = await digestMD5String(query);

        const cached: T | undefined = nodeCache.get(queryHash);
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

        nodeCache.set(queryHash, response, CACHE_EXPIRE);

        return {
            cached: CACHED_TYPE.NONE,
            cachedComponents: [],
            data: response,
        };
    },
);
