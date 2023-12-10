/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier_PrepareEnvironment
 * @description Page
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";
import { createSeriesDBRepositoryConfig } from "../../../../../../components/contribute/repositories";
import { SeriesEpisodePrepareEnvironmentArticle } from "../../../../../../components/series/prepare-environment/article";
import { EpisodeTitleSection } from "../../../../../../components/series/title/episode-title-section";
import { MainPageWrapper } from "../../../../../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../../../../../data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../../../data/definition/series/series";
import { requestSeriesMetadata } from "../../../../../../data/request/series-metadata";
import { seriesInternationalization } from "../../../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../../../dictionary/series/_profile";
import { useLocale } from "../../../../../../i18n/use-locale";
import { HrefConfig } from "../../../../../../util/href";
import { logger } from "../../../../../../util/log";

type Props = {

    readonly params: {
        readonly locale: string;
        readonly "series-name": string;
        readonly "episode-identifier": string;
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

    const episode: EpisodeEntity<EPISODE_TYPE> | undefined =
        series.data.episodes.find((each) => {
            return each.identifier === props.params["episode-identifier"];
        });

    if (!episode) {

        logger.error("Episode Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return notFound();
    }

    return (
        <MainPageWrapper
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
                    name: episode.title[locale] as string,
                    href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier),
                },
                {
                    name: seriesFormat.get(SERIES_PROFILE.PREPARE_ENVIRONMENT),
                    href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier, "prepare-environment"),
                },
            ]}
            cacheableResponse={series}
            contributeAnnotation={createSeriesDBRepositoryConfig(
                "series",
                series.data.identifier,
                "metadata.yml",
            )}
        >
            <EpisodeTitleSection
                series={series.data}
                episode={episode}
                locale={locale}
            />
            <SeriesEpisodePrepareEnvironmentArticle
                series={series.data as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>}
                episode={episode as EpisodeEntity<EPISODE_TYPE.CODING>}
            />
        </MainPageWrapper>
    );
};
