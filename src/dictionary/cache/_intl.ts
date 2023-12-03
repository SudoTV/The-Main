/**
 * @author WMXPY
 * @namespace Dictionary_Cache
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { CACHE_PROFILE } from "./_profile";
import { profile_cache_en_US } from "./en-US";
import { profile_cache_zh_CN } from "./zh-CN";

export const cacheInternationalization: SudooInternationalization<CACHE_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_cache_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_cache_en_US);
