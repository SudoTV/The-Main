/**
 * @author WMXPY
 * @namespace Dictionary_Contribute
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { CONTRIBUTE_PROFILE } from "./_profile";
import { profile_contribute_en_US } from "./en-US";
import { profile_contribute_zh_CN } from "./zh-CN";

export const contributeInternationalization: SudooInternationalization<CONTRIBUTE_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_contribute_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_contribute_en_US);
