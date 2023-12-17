/**
 * @author WMXPY
 * @namespace Util_Series
 * @description Latest Episode
 * @override Unit Test
 */

import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { findLatestEpisode } from "@/util/series/latest-episode";
import { Optional } from "@sudoo/optional";
import { UUIDVersion4 } from "@sudoo/uuid";
import { createMockEpisode } from "../../../mock/episode";

describe("Given Util Series [Latest Episode] Helper Methods", (): void => {

    describe("Given [findLatestEpisode] Helper Method", (): void => {

        test("should be able to get latest episode in single", (): void => {

            const identifier: string = UUIDVersion4.generateString();

            const episodes: Array<EpisodeEntity<EPISODE_TYPE>> = [
                createMockEpisode({
                    identifier,
                }),
            ];

            const latest: Optional<EpisodeEntity<EPISODE_TYPE>> =
                findLatestEpisode(episodes);

            expect(latest.exists).toBeTruthy();
            expect(latest.getOrThrow().identifier).toBe(identifier);
        });
    });
});
