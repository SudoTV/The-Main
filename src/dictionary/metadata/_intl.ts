/**
 * @author WMXPY
 * @namespace Dictionary_Metadata
 * @description Profile
 */

import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { METADATA_PROFILE } from "./_profile";
import { profile_metadata_en_US } from "./en-US";
import { profile_metadata_zh_CN } from "./zh-CN";

export const metadataInternationalization: SudooInternationalization<METADATA_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_metadata_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_metadata_en_US);
