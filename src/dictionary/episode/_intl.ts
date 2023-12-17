/**
 * @author WMXPY
 * @namespace Dictionary_Episode
 * @description Profile
 */

import { DEFAULT_LOCALE } from "@/i18n/config";
import { SudooInternationalization } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import { EPISODE_PROFILE } from "./_profile";
import { profile_episode_en_US } from "./en-US";
import { profile_episode_zh_CN } from "./zh-CN";

export const episodeInternationalization: SudooInternationalization<EPISODE_PROFILE> =
    SudooInternationalization
        .create(DEFAULT_LOCALE)
        .set(IETF_LOCALE.CHINESE_SIMPLIFIED, profile_episode_zh_CN)
        .set(IETF_LOCALE.ENGLISH_UNITED_STATES, profile_episode_en_US);
