/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description Page
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";
import { PowerLink } from "../../../components/common/power-link";
import { SeriesEpisodeCard } from "../../../components/series/episode/episode-card";
import { SeriesResourceCards } from "../../../components/series/resource-card/resource-cards";
import { SeriesProductSection } from "../../../components/series/sections/product-section";
import { Description1 } from "../../../components/typography/description-1";
import { Header1 } from "../../../components/typography/header-1";
import { Header2 } from "../../../components/typography/header-2";
import { MainPageWrapper } from "../../../components/typography/main-page-wrapper";
import { Section } from "../../../components/typography/section";
import { CacheableResponse } from "../../../data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { requestSeriesMetadata } from "../../../data/request/series-metadata";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../dictionary/series/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { HrefConfig } from "../../../util/href";
import { logger } from "../../../util/log";

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
        <Section
            marginTop
        >
            <Header2>
                {seriesFormat.get(SERIES_PROFILE.RECENTLY_UPDATED_SERIES)}
            </Header2>
            <div
                className="w-full mt-2 mb-3"
            >
                <PowerLink
                    href={HrefConfig.withinSite(locale, "series", series.data.identifier, "episodes")}
                >
                    {seriesFormat.get(SERIES_PROFILE.VIEW_ALL_EPISODES)}
                </PowerLink>
            </div>
            <div
                className="flex flex-col gap-4"
            >
                {series.data.episodes
                    .sort((
                        a: EpisodeEntity<EPISODE_TYPE>,
                        b: EpisodeEntity<EPISODE_TYPE>,
                    ) => {
                        if (a["release-date"] > b["release-date"]) return -1;
                        if (a["release-date"] < b["release-date"]) return 1;
                        return 0;
                    })
                    .slice(0, 10)
                    .map((episode) => {
                        const fixedSeries: CacheableResponse<SeriesEntity<SERIES_TYPE>> =
                            series as CacheableResponse<SeriesEntity<SERIES_TYPE>>;

                        return (<SeriesEpisodeCard
                            key={episode.identifier}
                            seriesIdentifier={fixedSeries.data.identifier}
                            episode={episode}
                        />);
                    })}
            </div>
        </Section>
    </MainPageWrapper>);
};
