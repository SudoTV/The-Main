/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier_Transcript
 * @description Page
 */

import { createSeriesDBRepositoryConfig } from "@/components/contribute/repositories";
import { MarkdownWrapper } from "@/components/markdown/wrapper";
import { SubEpisodeTitleSection } from "@/components/series/title/sub-episode-title-section";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { CacheableResponse } from "@/data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { requestSeriesEpisodeTranscript } from "@/data/request/series-episode-transcript";
import { requestSeriesMetadata } from "@/data/request/series-metadata";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { logger } from "@/util/log";
import { ParseMarkdownResult, parseMarkdown } from "@/util/parse-markdown";
import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";

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

    const rawMarkdown: CacheableResponse<string | typeof EmptyValueSymbol> =
        await requestSeriesEpisodeTranscript(
            props.params["series-name"],
            props.params["episode-identifier"],
            locale,
        );

    if (rawMarkdown.data === EmptyValueSymbol) {

        logger.error("Transcript Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return notFound();
    }

    const parsedMarkdown: ParseMarkdownResult = await parseMarkdown(rawMarkdown.data);

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
                    name: seriesFormat.get(SERIES_PROFILE.TRANSCRIPT),
                    href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier, "transcript"),
                },
            ]}
            cacheableResponse={rawMarkdown}
            contributeAnnotation={createSeriesDBRepositoryConfig(
                "series",
                series.data.identifier,
                "transcripts",
                episode.identifier,
                `${locale}.md`,
            )}
        >
            <SubEpisodeTitleSection
                series={series.data}
                episode={episode}
                title={seriesFormat.get(SERIES_PROFILE.TRANSCRIPT)}
                locale={locale}
            />
            <MarkdownWrapper
                locale={locale}
                contentLocale={parsedMarkdown.locale}
            >
                {parsedMarkdown.reactNodes}
            </MarkdownWrapper>
        </MainPageWrapper>
    );
};
