/**
 * @author WMXPY
 * @namespace Series
 * @description Page
 */

import { CachedIndicator } from "../../components/cache/cached-indicator";
import { SeriesCard } from "../../components/series/series-card/series-card";
import { Description1 } from "../../components/typography/description-1";
import { Header1 } from "../../components/typography/header-1";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../../data/definition/series/series";
import { requestSeriesList } from "../../data/request/series-list";
import { metadataInternationalization } from "../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../dictionary/metadata/_profile";
import { seriesInternationalization } from "../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../dictionary/series/_profile";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";

type Props = {
};

export default async function Page(_props: Props) {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);
    const metadataFormat = metadataInternationalization.format(locale);

    const series: CacheableResponse<Array<SeriesEntity<SERIES_TYPE>>> =
        await requestSeriesList();

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: metadataFormat.get(METADATA_PROFILE.SERIES_TITLE),
                href: HrefConfig.withinSite(locale, "series"),
            },
        ]}
    >
        <div
            className="w-full"
        >
            <Header1>
                {seriesFormat.get(SERIES_PROFILE.SERIES_TITLE)}
            </Header1>
            <Description1>
                {seriesFormat.get(SERIES_PROFILE.SERIES_DESCRIPTION)}
            </Description1>
        </div>
        <div
            className="w-full flex flex-col gap-3"
        >
            {series.data.map((each: SeriesEntity<SERIES_TYPE>) => {
                return (<SeriesCard
                    key={each.identifier}
                    series={each}
                />);
            })}
        </div>
        <div
            className="w-full mt-2"
        >
            <CachedIndicator
                cacheableResponse={series}
                locale={locale}
            />
        </div>
    </MainPageWrapper>);
};
