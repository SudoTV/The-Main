/**
* @author WMXPY
* @namespace Components_Series_SeriesCard
* @description Episode Content
*/

import { SERIES_STATUS, SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import * as React from "react";
import { SeriesCardEpisodeContentFinale } from "./episode-content-finale";
import { SeriesCardEpisodeContentPaused } from "./episode-content-paused";
import { SeriesCardEpisodeContentUpdating } from "./episode-content-updating";

export type SeriesCardEpisodeContentProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
};

export const SeriesCardEpisodeContent: React.FC<SeriesCardEpisodeContentProps> = (
    props: SeriesCardEpisodeContentProps,
) => {

    switch (props.series.status) {

        case SERIES_STATUS.COMING_SOON:
            return null;
        case SERIES_STATUS.FINALE:
            return <SeriesCardEpisodeContentFinale
                series={props.series}
            />;
        case SERIES_STATUS.PAUSED:
            return <SeriesCardEpisodeContentPaused
                series={props.series}
            />;
        case SERIES_STATUS.UPDATING:
            return <SeriesCardEpisodeContentUpdating
                series={props.series}
            />;
    }

    return null;
};
