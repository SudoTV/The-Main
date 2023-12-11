/**
 * @author WMXPY
 * @namespace Dictionary_Product
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { PRODUCT_PROFILE } from "./_profile";
import { profile_product_en_US } from "./en-US";
import { profile_product_zh_CN } from "./zh-CN";

export const productInternationalization: SudooInternationalization<PRODUCT_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_product_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_product_en_US);
