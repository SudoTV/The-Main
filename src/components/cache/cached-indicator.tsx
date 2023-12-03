/**
* @author WMXPY
* @namespace Components_Cache
* @description Cached Indicator
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { CACHED_TYPE, CacheableResponse } from "../../data/cache/definition";
import { cacheInternationalization } from "../../dictionary/cache/_intl";
import { CACHE_PROFILE } from "../../dictionary/cache/_profile";

export type CachedIndicatorProps = {

    readonly cacheableResponse: CacheableResponse<any>;
    readonly locale: IETF_LOCALE;
};

export const CachedIndicator: React.FC<CachedIndicatorProps> = (props: CachedIndicatorProps) => {

    const format = cacheInternationalization.format(props.locale);

    const divClasses: string[] = [
        "text-gray-400",
        "dark:text-gray-500",
        "text-sm",
    ];

    switch (props.cacheableResponse.cached) {

        case CACHED_TYPE.FULL: {
            return (<div
                className={divClasses.join(" ")}
            >
                {format.get(CACHE_PROFILE.THIS_PAGE_IS_FULLY_CACHED)}
            </div>);
        }
        case CACHED_TYPE.PARTIAL: {
            return (<div
                className={divClasses.join(" ")}
            >
                {format.get(CACHE_PROFILE.THIS_PAGE_IS_PARTIALLY_CACHED)}
            </div>);
        }
        case CACHED_TYPE.NONE: {
            return (<div
                className={divClasses.join(" ")}
            >
                {format.get(CACHE_PROFILE.THIS_PAGE_IS_NOT_CACHED)}
            </div>);
        }
    }
};
