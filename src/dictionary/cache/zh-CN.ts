/**
 * @author WMXPY
 * @namespace Dictionary_Cache
 * @description Chinese Simplified
 */

import { PROFILE } from "@sudoo/internationalization";
import { CACHE_PROFILE } from "./_profile";

export const profile_cache_zh_CN: PROFILE<CACHE_PROFILE> = {

    [CACHE_PROFILE.THIS_PAGE_IS_FULLY_CACHED]: "此页面已完全缓存",
    [CACHE_PROFILE.THIS_PAGE_IS_PARTIALLY_CACHED]: "此页面已部分缓存",
    [CACHE_PROFILE.THIS_PAGE_IS_NOT_CACHED]: "此页面未缓存",

    [CACHE_PROFILE.CACHED_COMPONENTS]: "已缓存组件",
};
