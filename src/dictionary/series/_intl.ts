/**
 * @author WMXPY
 * @namespace Dictionary_Series
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { SERIES_PROFILE } from "./_profile";
import { profile_series_en_US } from "./en-US";
import { profile_series_zh_CN } from "./zh-CN";

export const seriesInternationalization: SudooInternationalization<SERIES_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_series_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_series_en_US);
