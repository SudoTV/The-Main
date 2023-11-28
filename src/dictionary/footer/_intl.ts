/**
 * @author WMXPY
 * @namespace Dictionary_Footer
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { FOOTER_PROFILE } from "./_profile";
import { profile_footer_en_US } from "./en-US";
import { profile_footer_zh_CN } from "./zh-CN";

export const footerInternationalization: SudooInternationalization<FOOTER_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_footer_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_footer_en_US);
