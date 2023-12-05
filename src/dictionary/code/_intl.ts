/**
 * @author WMXPY
 * @namespace Dictionary_Code
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { CODE_PROFILE } from "./_profile";
import { profile_code_en_US } from "./en-US";
import { profile_code_zh_CN } from "./zh-CN";

export const codeInternationalization: SudooInternationalization<CODE_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_code_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_code_en_US);
