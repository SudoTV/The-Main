/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description OpenGraph Image
 */

import { CacheableResponse } from "@/data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { requestSeriesMetadata } from "@/data/request/series-metadata";
import { logger } from "@/util/log";
import { findLocaleFromCookies } from "@/util/metadata/find-locale-from-cookies";
import { IETF_LOCALE } from "@sudoo/locale";
import { EmptyValueSymbol } from "@sudoo/symbol";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { BiSolidChevronRight } from "react-icons/bi";

export const alt = "SudoTV";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Image(props: Props) {

    const cookiesList = cookies();

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol> =
        await requestSeriesMetadata(props.params["series-name"]);

    if (series.data === EmptyValueSymbol) {

        logger.error("Series Not Found", props.params["series-name"]);
        return notFound();
    }

    const locale = findLocaleFromCookies(cookiesList);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <BiSolidChevronRight
                        size={96}
                    />
                    <div>
                        SudoTV Series
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 128,
                        marginBottom: 96,
                        marginLeft: 96,
                        marginRight: 96,
                        alignSelf: "center",
                    }}
                >
                    {series.data.title[
                        locale.getOrDefault(
                            IETF_LOCALE.ENGLISH_UNITED_STATES,
                        )
                    ]}
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
