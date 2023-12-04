/**
 * @author WMXPY
 * @namespace Series_SeriesName
 * @description Page
 */

import { PowerLink } from "../../../components/common/power-link";
import { SeriesEpisodeCard } from "../../../components/series/episode/episode-card";
import { SeriesResourceCards } from "../../../components/series/resource-card/resource-cards";
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

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE>> =
        await requestSeriesMetadata(props.params["series-name"]);

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
                    href="/series"
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
                        return (<SeriesEpisodeCard
                            key={episode.identifier}
                            seriesIdentifier={series.data.identifier}
                            episode={episode}
                        />);
                    })}
            </div>
        </Section>
    </MainPageWrapper>);
};
