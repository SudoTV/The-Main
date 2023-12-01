/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description Page
 */

import { SeriesEpisodeCard } from "../../../components/series/episode/episode-card";
import { SeriesResourceCards } from "../../../components/series/resource-card/resource-cards";
import { Description1 } from "../../../components/typography/description-1";
import { Header1 } from "../../../components/typography/header-1";
import { Header2 } from "../../../components/typography/header-2";
import { MainPageWrapper } from "../../../components/typography/main-page-wrapper";
import { Section } from "../../../components/typography/section";
import { requestSeriesMetadata } from "../../../data/request/series-metadata";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../dictionary/series/_profile";
import { useLocale } from "../../../i18n/use-locale";

type Props = {

    readonly params: {
        readonly locale: string;
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const format = seriesInternationalization.format(locale);

    const series = await requestSeriesMetadata(props.params["series-name"]);

    return (<MainPageWrapper>
        <Section>
            {series.original
                ? <Description1
                    noMargin
                >
                    {format.get(SERIES_PROFILE.ORIGINAL_ANNOTATION)}
                </Description1>
                : null}
            <Header1>
                {series.title[locale]}
            </Header1>
            <Description1>
                {series.description[locale]}
            </Description1>
        </Section>
        <Section
            className="flex"
        >
            <SeriesResourceCards
                series={series}
            />
        </Section>
        <Section
            marginTop
        >
            <Header2>
                {format.get(SERIES_PROFILE.ALL_EPISODES)}
            </Header2>
            <div
                className="flex flex-col gap-4"
            >
                {series.episodes.map((episode) => {
                    return (<SeriesEpisodeCard
                        key={episode.identifier}
                        seriesIdentifier={series.identifier}
                        episode={episode}
                    />);
                })}
            </div>
        </Section>
    </MainPageWrapper>);
};
