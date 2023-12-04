/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episodes
 * @description Page
 */

import { LocaleSwitcher } from "../../../../components/preference/language-switcher";
import { MainPageWrapper } from "../../../../components/typography/main-page-wrapper";
import { CacheableResponse } from "../../../../data/cache/definition";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { getGithubFile } from "../../../../data/github/get-file";
import { requestSeriesMetadata } from "../../../../data/request/series-metadata";
import { seriesInternationalization } from "../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../dictionary/series/_profile";
import { useLocale } from "../../../../i18n/use-locale";
import { HrefConfig } from "../../../../util/href";

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

    await getGithubFile("SudoTV", "SudoTV-Series-DB", "main", ["docs", "README.md"]);

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
            {
                name: seriesFormat.get(SERIES_PROFILE.ALL_EPISODES),
                href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episodes"),
            },
        ]}
    >
        <h1>Static page</h1>
        <p>{props.params["series-name"]}</p>
        <p>Episode</p>
        <p>{locale}</p>
        <LocaleSwitcher />
    </MainPageWrapper>);
};
