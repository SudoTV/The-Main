/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Software Engineering Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { GoCodeReview } from "react-icons/go";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { useLocale } from "../../../../i18n/use-locale";
import { HrefConfig } from "../../../../util/href";
import { RedirectionCard } from "../../../common/redirection-card";
import { SeriesCardEpisodeContent } from "../common/episode-content";
import { SeriesCardPrefix } from "../series-prefix";

export type SeriesCardSoftwareEngineeringProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
};

export const SeriesCardSoftwareEngineering: React.FC<SeriesCardSoftwareEngineeringProps> = (
    props: SeriesCardSoftwareEngineeringProps,
) => {

    const series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING> = props.series;

    const locale: IETF_LOCALE = useLocale();

    return (
        <RedirectionCard
            full
            leadTitle={<SeriesCardPrefix
                series={series}
                locale={locale}
            />}
            title={series.title[locale]}
            titleHref={HrefConfig.withinSite(locale, "series", series.identifier)}
            subtitle={series.description[locale]}
            suffix={<SeriesCardEpisodeContent
                series={series}
            />}
            backgroundIcon={GoCodeReview}
        />
    );
};
