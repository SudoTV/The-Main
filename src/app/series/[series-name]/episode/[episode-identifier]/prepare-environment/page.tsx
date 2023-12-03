/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier_Transcript
 * @description Page
 */

import { CachedIndicator } from "../../../../../../components/cache/cached-indicator";
import { MarkdownWrapper } from "../../../../../../components/markdown/wrapper";
import { MainPageWrapper } from "../../../../../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../../../../../data/cache/definition";
import { requestSeriesEpisodeTranscript } from "../../../../../../data/request/series-episode-transcript";
import { useLocale } from "../../../../../../i18n/use-locale";
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

    const rawMarkdown: CacheableResponse<string> =
        await requestSeriesEpisodeTranscript(
            props.params["series-name"],
            props.params["episode-identifier"],
            locale,
        );

    const parsedMarkdown: ParseMarkdownResult = await parseMarkdown(rawMarkdown.data);

    return (
        <MainPageWrapper>
            <MarkdownWrapper>
                <div>
                    {parsedMarkdown.reactNodes}
                </div>
            </MarkdownWrapper>
            <div
                className="w-full mt-2"
            >
                <CachedIndicator
                    cacheableResponse={rawMarkdown}
                    locale={locale}
                />
            </div>
        </MainPageWrapper>
    );
};
