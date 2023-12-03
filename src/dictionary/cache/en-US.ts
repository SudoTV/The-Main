/**
 * @author WMXPY
 * @namespace Dictionary_Cache
 * @description English United States
 */

import { PROFILE } from "@sudoo/internationalization";
import { CACHE_PROFILE } from "./_profile";

export const profile_cache_en_US: PROFILE<CACHE_PROFILE> = {

    [CACHE_PROFILE.THIS_PAGE_IS_FULLY_CACHED]: "This page is fully cached",
    [CACHE_PROFILE.THIS_PAGE_IS_PARTIALLY_CACHED]: "This page is partially cached",
    [CACHE_PROFILE.THIS_PAGE_IS_NOT_CACHED]: "This page is not cached",

    [CACHE_PROFILE.CACHED_COMPONENTS]: "Cached Components",
};
