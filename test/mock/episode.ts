/**
 * @author WMXPY
 * @namespace Mock
 * @description Episode
 * @override Mock
 */

import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { IETF_LOCALE } from "@sudoo/locale";
import { UUIDVersion4 } from "@sudoo/uuid";

export const createMockEpisode = (
    overrides: Partial<EpisodeEntity<EPISODE_TYPE>> = {},
): EpisodeEntity<EPISODE_TYPE> => {

    const uuid = UUIDVersion4.generateString();

    const episode = {
        identifier: uuid,
        premiered: true,
        type: EPISODE_TYPE.CONSOLE_GAMING,
        "release-date": new Date(),
        title: {
            [IETF_LOCALE.ENGLISH_UNITED_STATES]: "title",
            [IETF_LOCALE.CHINESE_SIMPLIFIED]: "标题",
        },
        description: {
            [IETF_LOCALE.ENGLISH_UNITED_STATES]: "description",
            [IETF_LOCALE.CHINESE_SIMPLIFIED]: "描述",
        },
        videos: {
            [IETF_LOCALE.ENGLISH_UNITED_STATES]: [],
            [IETF_LOCALE.CHINESE_SIMPLIFIED]: [],
        },
    };

    return {
        ...episode,
        ...overrides,
    };
};
