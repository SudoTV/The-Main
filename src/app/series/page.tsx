/**
 * @author WMXPY
 * @namespace Series
 * @description Page
 */

import { createSeriesDBRepositoryConfig } from "../../components/contribute/repositories";
import { SeriesCard } from "../../components/series/series-card/series-card";
import { Description1 } from "../../components/typography/description-1";
import { Header1 } from "../../components/typography/header-1";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../data/cache/definition";
import { SERIES_STATUS, SERIES_TYPE, SeriesEntity } from "../../data/definition/series/series";
import { requestSeriesList } from "../../data/request/series-list";
import { seriesInternationalization } from "../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../dictionary/series/_profile";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";
import { sortSeriesFunction } from "../../util/series/sort-series";

type Props = {
};

export default async function Page(_props: Props) {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);

    const series: CacheableResponse<Array<SeriesEntity<SERIES_TYPE>>> =
        await requestSeriesList();

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: seriesFormat.get(SERIES_PROFILE.SERIES_TITLE),
                href: HrefConfig.withinSite(locale, "series"),
            },
        ]}
        cacheableResponse={series}
        contributeAnnotation={createSeriesDBRepositoryConfig(
            "series",
        )}
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
            {series.data
                .sort(sortSeriesFunction)
                .sort((a: SeriesEntity<SERIES_TYPE>, b: SeriesEntity<SERIES_TYPE>) => {

                    if (a.status === b.status) {
                        return 0;
                    }

                    if (a.status === SERIES_STATUS.UPDATING) {
                        return -1;
                    }
                    if (b.status === SERIES_STATUS.UPDATING) {
                        return 1;
                    }

                    if (a.status === SERIES_STATUS.COMING_SOON) {
                        return -1;
                    }
                    if (b.status === SERIES_STATUS.COMING_SOON) {
                        return 1;
                    }

                    return 0;
                })
                .map((each: SeriesEntity<SERIES_TYPE>) => {
                    return (<SeriesCard
                        key={each.identifier}
                        series={each}
                    />);
                })}
        </div>
    </MainPageWrapper>);
};
