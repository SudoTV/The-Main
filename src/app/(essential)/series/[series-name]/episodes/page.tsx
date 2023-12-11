/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episodes
 * @description Page
 */

import { createSeriesDBRepositoryConfig } from "@/components/contribute/repositories";
import { SeriesAllEpisodes } from "@/components/series/series/all-episodes";
import { Description1 } from "@/components/typography/description-1";
import { Header1 } from "@/components/typography/header-1";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { Section } from "@/components/typography/section";
import { CacheableResponse } from "@/data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { requestSeriesMetadata } from "@/data/request/series-metadata";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { logger } from "@/util/log";
import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";

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
            {
                name: seriesFormat.get(SERIES_PROFILE.ALL_EPISODES),
                href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episodes"),
            },
        ]}
        cacheableResponse={series}
        contributeAnnotation={createSeriesDBRepositoryConfig(
            "series",
            series.data.identifier,
            "metadata.yml",
        )}
    >
        <Section>
            {series.data.original
                ? <Description1
                    noMargin
                >
                    {seriesFormat.get(SERIES_PROFILE.ORIGINAL_ANNOTATION)}
                </Description1>
                : null}
            <Header1>
                {series.data.title[locale]}
            </Header1>
            <Description1>
                {series.data.description[locale]}
            </Description1>
        </Section>
        <SeriesAllEpisodes
            series={series.data}
            locale={locale}
        />
    </MainPageWrapper>);
};
