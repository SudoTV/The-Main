/**
 * @author WMXPY
 * @namespace Util_UrlBuilder
 * @description Repository
 * @override Unit Test
 */

import { REPOSITORY_PLATFORM } from "@/data/definition/repository/repository";
import { buildRepositoryForkUrl, buildRepositoryUrl } from "@/util/url-builder/repository";

describe("Given Util UrlBuilder [Repository] Helper Methods", (): void => {

    describe("Given [buildRepositoryUrl] Helper Method", (): void => {

        test("Should return the repository url", (): void => {

            const repositoryUrl: string = buildRepositoryUrl({
                platform: REPOSITORY_PLATFORM.GITHUB,
                owner: "owner",
                repository: "repository",
            });

            expect(repositoryUrl).toEqual("https://github.com/owner/repository");
        });
    });

    describe("Given [buildRepositoryForkUrl] Helper Method", (): void => {

        test("Should return the repository forked url", (): void => {

            const repositoryUrl: string = buildRepositoryForkUrl({
                platform: REPOSITORY_PLATFORM.GITHUB,
                owner: "owner",
                repository: "repository",
            }, "newOwner");

            expect(repositoryUrl).toEqual("https://github.com/newOwner/repository");
        });
    });
});
