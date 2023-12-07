/**
* @author WMXPY
* @namespace Components_Cache
* @description Cached Indicator
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { CACHED_TYPE, CacheableResponse, CachedComponent } from "../../data/cache/definition";
import { cacheInternationalization } from "../../dictionary/cache/_intl";
import { CACHE_PROFILE } from "../../dictionary/cache/_profile";

export type CachedIndicatorProps = {

    readonly cacheableResponse: CacheableResponse<any>;
    readonly locale: IETF_LOCALE;

    readonly reversed?: boolean;
};

export const CachedIndicator: React.FC<CachedIndicatorProps> = (props: CachedIndicatorProps) => {

    const format = cacheInternationalization.format(props.locale);

    const divClasses: string[] = [
        "flex",
        "justify-start",
        "items-center",
        "text-gray-400",
        "dark:text-gray-500",
        "text-sm",
    ];

    const cachedComponentsText: string = props
        .cacheableResponse
        .cachedComponents
        .map((component: CachedComponent) => {
            return component.identifier;
        })
        .join(", ");

    switch (props.cacheableResponse.cached) {

        case CACHED_TYPE.FULL: {
            return (<div
                className={divClasses.join(" ")}
            >
                {props.reversed
                    ? null
                    : <span
                        className="flex w-3 h-3 me-2 bg-green-300 rounded-full"
                    />}
                <span
                    title={cachedComponentsText}
                >
                    {format.get(CACHE_PROFILE.THIS_PAGE_IS_FULLY_CACHED)}
                </span>
                {props.reversed
                    ? <span
                        className="flex w-3 h-3 ms-2 bg-green-300 rounded-full"
                    />
                    : null}
            </div>);
        }
        case CACHED_TYPE.PARTIAL: {
            return (<div
                className={divClasses.join(" ")}
            >
                {props.reversed
                    ?
                    null
                    : <span
                        className="flex w-3 h-3 me-2 bg-blue-300 rounded-full"
                    />}
                <span
                    title={cachedComponentsText}
                >
                    {format.get(CACHE_PROFILE.THIS_PAGE_IS_PARTIALLY_CACHED)}
                </span>
                {props.reversed
                    ? <span
                        className="flex w-3 h-3 ms-2 bg-blue-300 rounded-full"
                    />
                    : null}
            </div>);
        }
        case CACHED_TYPE.NONE: {
            return (<div
                className={divClasses.join(" ")}
            >
                {props.reversed
                    ? null
                    : <span
                        className="flex w-3 h-3 me-2 bg-yellow-300 rounded-full"
                    />}
                <span
                    title={cachedComponentsText}
                >
                    {format.get(CACHE_PROFILE.THIS_PAGE_IS_NOT_CACHED)}
                </span>
                {props.reversed
                    ? <span
                        className="flex w-3 h-3 ms-2 bg-yellow-300 rounded-full"
                    />
                    : null}
            </div>);
        }
    }
};
