/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Software Engineering Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { GrCompliance, GrPause, GrUpdate } from "react-icons/gr";
import { LuCalendarRange } from "react-icons/lu";
import { SERIES_STATUS, SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../dictionary/series/_profile";

export type SeriesCardPrefixProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly locale: IETF_LOCALE;
};

export const SeriesCardPrefix: React.FC<SeriesCardPrefixProps> = (
    props: SeriesCardPrefixProps,
) => {

    const format = seriesInternationalization.format(props.locale);

    switch (props.series.status) {
        case SERIES_STATUS.COMING_SOON:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <LuCalendarRange />
                {format.get(SERIES_PROFILE.COMING_SOON)}
            </div>);
        case SERIES_STATUS.UPDATING:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrUpdate />
                {format.get(SERIES_PROFILE.UPDATING)}
            </div>);
        case SERIES_STATUS.PAUSED:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrPause />
                {format.get(SERIES_PROFILE.PAUSED)}
            </div>);
        case SERIES_STATUS.FINALE:
            return (<div
                className="flex flex-row items-center gap-2"
            >
                <GrCompliance />
                {format.get(SERIES_PROFILE.FINALE)}
            </div>);
    }

    return null;
};
