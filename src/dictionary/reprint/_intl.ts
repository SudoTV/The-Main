/**
 * @author WMXPY
 * @namespace Dictionary_Reprint
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { REPRINT_PROFILE } from "./_profile";
import { profile_reprint_en_US } from "./en-US";
import { profile_reprint_zh_CN } from "./zh-CN";

export const reprintInternationalization: SudooInternationalization<REPRINT_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_reprint_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_reprint_en_US);
