/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier_Transcript
 * @description Page
 */

import { MarkdownWrapper } from "../../../../../../components/markdown/wrapper";
import { MainPageWrapper } from "../../../../../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../../../../../data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../../../data/definition/series/series";
import { requestSeriesEpisodeTranscript } from "../../../../../../data/request/series-episode-transcript";
import { requestSeriesMetadata } from "../../../../../../data/request/series-metadata";
import { metadataInternationalization } from "../../../../../../dictionary/metadata/_intl";
import { seriesInternationalization } from "../../../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../../../dictionary/series/_profile";
import { useLocale } from "../../../../../../i18n/use-locale";
import { HrefConfig } from "../../../../../../util/href";
import { logger } from "../../../../../../util/log";
import { ParseMarkdownResult, parseMarkdown } from "../../../../../../util/parse-markdown";

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
    const metadataFormat = metadataInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE>> =
        await requestSeriesMetadata(props.params["series-name"]);

    const episode: EpisodeEntity<EPISODE_TYPE> | undefined =
        series.data.episodes.find((each) => {
            return each.identifier === props.params["episode-identifier"];
        });

    if (!episode) {

        logger.error("Episode Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return "NOT FOUND";
    }

    const rawMarkdown: CacheableResponse<string> =
        await requestSeriesEpisodeTranscript(
            props.params["series-name"],
            props.params["episode-identifier"],
            locale,
        );

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
        >
            <MarkdownWrapper>
                {parsedMarkdown.reactNodes}
            </MarkdownWrapper>
        </MainPageWrapper>
    );
};
