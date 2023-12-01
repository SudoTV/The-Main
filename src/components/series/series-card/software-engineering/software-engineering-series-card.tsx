/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Software Engineering Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { GrCompliance, GrPause, GrUpdate } from "react-icons/gr";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SOFTWARE_ENGINEERING_SERIES_STATUS } from "../../../../data/definition/series/software-engineering";
import { seriesInternationalization } from "../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../dictionary/series/_profile";
import { useLocale } from "../../../../i18n/use-locale";
import { HrefConfig } from "../../../../util/href";
import { RedirectionCard } from "../../../common/redirection-card";
import { SeriesCardSoftwareEngineeringEpisodeContent } from "./episode-content";

type PrefixProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly locale: IETF_LOCALE;
};

const Prefix: React.FC<PrefixProps> = (
    props: PrefixProps,
) => {

    const format = seriesInternationalization.format(props.locale);

    switch (props.series.status) {
        case SOFTWARE_ENGINEERING_SERIES_STATUS.UPDATING:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrUpdate />
                {format.get(SERIES_PROFILE.UPDATING)}
            </div>);
        case SOFTWARE_ENGINEERING_SERIES_STATUS.PAUSED:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrPause />
                {format.get(SERIES_PROFILE.PAUSED)}
            </div>);
        case SOFTWARE_ENGINEERING_SERIES_STATUS.FINALE:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrCompliance />
                {format.get(SERIES_PROFILE.FINALE)}
            </div>);
    }

    return null;
};

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
            leadTitle={<Prefix
                series={series}
                locale={locale}
            />}
            title={series.title[locale]}
            titleHref={HrefConfig.withinSite(locale, "series", series.identifier)}
            subtitle={series.description[locale]}
            suffix={<SeriesCardSoftwareEngineeringEpisodeContent
                series={series}
            />}
        />
    );
};
