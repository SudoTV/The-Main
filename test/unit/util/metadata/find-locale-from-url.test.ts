/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Find Locale From URL
 * @override Unit Test
 */

import { findLocaleFromReferer, findLocaleFromUrl } from "@/util/metadata/find-locale-from-url";
import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import { ExpectOptional } from "../../../expect/optional";

describe("Given Util Metadata [Find Locale From Url Utils] Helper Methods", (): void => {

    describe("Given [findLocaleFromReferer] Helper Method", (): void => {

        test("Should return the locale from the referer", (): void => {

            const referer: string = `/${IETF_LOCALE.ENGLISH_UNITED_STATES}/hello-world/`;
            const result: Optional<string> = findLocaleFromReferer(referer);

            ExpectOptional.with(result)
                .toBeExist()
                .toBeEqual(IETF_LOCALE.ENGLISH_UNITED_STATES);
        });

        test("Should return empty if the referer does not contain a valid locale", (): void => {

            const referer = "/hello-world/en_US/";
            const result = findLocaleFromReferer(referer);

            ExpectOptional.with(result)
                .toBeEmpty();
        });
    });

    describe("Given [findLocaleFromUrl] Helper Method", (): void => {

        test("Should return the locale from the url", (): void => {

            const referer: string = `https://hello.com/${IETF_LOCALE.ENGLISH_UNITED_STATES}/hello-world/`;
            const result: Optional<string> = findLocaleFromUrl(referer);

            ExpectOptional.with(result)
                .toBeExist()
                .toBeEqual(IETF_LOCALE.ENGLISH_UNITED_STATES);
        });

        test("Should return the locale from the url without header", (): void => {

            const referer: string = `hello.com/${IETF_LOCALE.ENGLISH_UNITED_STATES}/hello-world/`;
            const result: Optional<string> = findLocaleFromUrl(referer);

            ExpectOptional.with(result)
                .toBeExist()
                .toBeEqual(IETF_LOCALE.ENGLISH_UNITED_STATES);
        });

        test("Should return empty if the url does not contain a valid locale", (): void => {

            const referer = "https://hello.com/hello-world/en_US/";
            const result = findLocaleFromUrl(referer);

            ExpectOptional.with(result)
                .toBeEmpty();
        });
    });
});
