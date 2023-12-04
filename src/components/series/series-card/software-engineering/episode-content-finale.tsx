/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Episode Content Finale
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { seriesInternationalization } from "../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../dictionary/series/_profile";
import { useLocale } from "../../../../i18n/use-locale";
import { HrefConfig } from "../../../../util/href";
import { PowerLink } from "../../../common/power-link";

export type SeriesCardSoftwareEngineeringEpisodeContentFinaleProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
};

export const SeriesCardSoftwareEngineeringEpisodeContentFinale: React.FC<SeriesCardSoftwareEngineeringEpisodeContentFinaleProps> = (
    props: SeriesCardSoftwareEngineeringEpisodeContentFinaleProps,
) => {

    const locale: IETF_LOCALE = useLocale();
    const format = seriesInternationalization.format(locale);

    return (
        <div
            className="flex flex-col items-end"
        >
            <div
                className="font-semibold text-base sm:text-lg"
            >
                <PowerLink
                    href={HrefConfig.withinSite(locale, "series", props.series.identifier, "episodes")}
                >
                    {format.get(SERIES_PROFILE.ALL_EPISODES)}
                </PowerLink>
            </div>
        </div>
    );
};
