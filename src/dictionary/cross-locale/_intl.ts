/**
 * @author WMXPY
 * @namespace Dictionary_CrossLocale
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { profile_cross_locale_en_US } from "./en-US";
import { profile_cross_locale_zh_CN } from "./zh-CN";

export const crossLocaleInternationalization: SudooInternationalization<IETF_LOCALE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_cross_locale_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_cross_locale_en_US);
