/**
 * @author WMXPY
 * @namespace Dictionary_Content
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { CONTENT_PROFILE } from "./_profile";
import { profile_content_en_US } from "./en-US";
import { profile_content_zh_CN } from "./zh-CN";

export const contentInternationalization: SudooInternationalization<CONTENT_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_content_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_content_en_US);
