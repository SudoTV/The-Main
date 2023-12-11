/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description Page
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";
import { createSeriesDBRepositoryConfig } from "@/components/contribute/repositories";
import { SeriesResourceCards } from "@/components/series/resource-card/resource-cards";
import { SeriesProductSection } from "@/components/series/sections/product-section";
import { SeriesRecentlyUpdated } from "@/components/series/series/recently-updated";
import { SeriesTitleSection } from "@/components/series/title/series-title-section";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { Section } from "@/components/typography/section";
import { CacheableResponse } from "../../../data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { requestSeriesMetadata } from "../../../data/request/series-metadata";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { logger } from "@/util/log";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol> =
        await requestSeriesMetadata(props.params["series-name"]);

    if (series.data === EmptyValueSymbol) {

        logger.error("Series Not Found", props.params["series-name"]);
        return notFound();
    }

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: seriesFormat.get(SERIES_PROFILE.SERIES_TITLE),
                href: HrefConfig.withinSite(locale, "series"),
            },
            {
                name: series.data.title[locale] as string,
                href: HrefConfig.withinSite(locale, "series", series.data.identifier),
            },
        ]}
        cacheableResponse={series}
        contributeAnnotation={createSeriesDBRepositoryConfig(
            "series",
            series.data.identifier,
            "metadata.yml",
        )}
    >
        <SeriesTitleSection
            series={series.data}
            locale={locale}
        />
        <Section
            className="flex"
        >
            <SeriesResourceCards
                series={series.data}
            />
        </Section>
        <SeriesProductSection
            series={series.data}
            locale={locale}
        />
        <SeriesRecentlyUpdated
            series={series.data}
            locale={locale}
        />
    </MainPageWrapper>);
};
