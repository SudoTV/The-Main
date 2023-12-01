/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier_Transcript
 * @description Page
 */

import { MarkdownWrapper } from "../../../../../../components/markdown/wrapper";
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

    const rawMarkdown: string = await requestSeriesEpisodeTranscript(
        props.params["series-name"],
        props.params["episode-identifier"],
        locale,
    );

    const parsedMarkdown: ParseMarkdownResult = await parseMarkdown(rawMarkdown);

    return (
        <div>
            <MarkdownWrapper>
                <div>
                    {parsedMarkdown.reactNodes}
                </div>
            </MarkdownWrapper>
        </div>
    );
};
