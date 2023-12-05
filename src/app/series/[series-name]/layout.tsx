/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description Layout
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { EmptyValueSymbol } from "@sudoo/symbol";
import type { Metadata } from "next";
import { CacheableResponse } from "../../../data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { requestSeriesMetadata } from "../../../data/request/series-metadata";
import { metadataInternationalization } from "../../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../../dictionary/metadata/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { logger } from "../../../util/log";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export async function generateMetadata(props: Props): Promise<Metadata> {

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol> =
        await requestSeriesMetadata(props.params["series-name"]);

    if (series.data === EmptyValueSymbol) {

        logger.error("Series Not Found", props.params["series-name"]);
        return {};
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale: IETF_LOCALE = useLocale();
    const profile = metadataInternationalization.format(locale);

    const seriesTitle: string = series.data.title[locale] as string;

    return {
        title: profile.get(
            METADATA_PROFILE.SERIES_SERIES_TITLE_1,
            seriesTitle,
        ),
        description: profile.get(
            METADATA_PROFILE.SERIES_SERIES_DESCRIPTION_1,
            seriesTitle,
        ),
    };
};

export default function Layout(props: {
    children: React.ReactNode,
}) {

    return props.children;
}
