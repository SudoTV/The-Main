/**
 * @author WMXPY
 * @namespace Dictionary_WelcomeCode
 * @description Profile
 */

import { DEFAULT_LOCALE } from "@/i18n/config";
import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { WELCOME_CODE_PROFILE } from "./_profile";
import { profile_welcomeCode_en_US } from "./en-US";
import { profile_welcomeCode_zh_CN } from "./zh-CN";

export const welcomeCodeInternationalization: SudooInternationalization<WELCOME_CODE_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_welcomeCode_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_welcomeCode_en_US);
