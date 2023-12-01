/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Episode Content
*/

import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SOFTWARE_ENGINEERING_SERIES_STATUS } from "../../../../data/definition/series/software-engineering";
import { SeriesCardSoftwareEngineeringEpisodeContentFinale } from "./episode-content-finale";
import { SeriesCardSoftwareEngineeringEpisodeContentPaused } from "./episode-content-paused";
import { SeriesCardSoftwareEngineeringEpisodeContentUpdating } from "./episode-content-updating";

export type SeriesCardSoftwareEngineeringEpisodeContentProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
};

export const SeriesCardSoftwareEngineeringEpisodeContent: React.FC<SeriesCardSoftwareEngineeringEpisodeContentProps> = (
    props: SeriesCardSoftwareEngineeringEpisodeContentProps,
) => {

    switch (props.series.status) {

        case SOFTWARE_ENGINEERING_SERIES_STATUS.FINALE:
            return <SeriesCardSoftwareEngineeringEpisodeContentFinale
                series={props.series}
            />;
        case SOFTWARE_ENGINEERING_SERIES_STATUS.PAUSED:
            return <SeriesCardSoftwareEngineeringEpisodeContentPaused
                series={props.series}
            />;
        case SOFTWARE_ENGINEERING_SERIES_STATUS.UPDATING:
            return <SeriesCardSoftwareEngineeringEpisodeContentUpdating
                series={props.series}
            />;
    }

    return null;
};
