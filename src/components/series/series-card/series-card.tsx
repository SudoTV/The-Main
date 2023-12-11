/**
* @author WMXPY
* @namespace Components_Series_SeriesCard
* @description Series Card
*/

import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { logger } from "@/util/log";
import { SeriesCardSoftwareEngineering } from "./software-engineering/software-engineering-series-card";
import { SeriesCardVideoGameStreaming } from "./video-game-streaming/video-game-streaming-series";

export type SeriesCardProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
};

export const SeriesCard: React.FC<SeriesCardProps> = (
    props: SeriesCardProps,
) => {

    switch (props.series.type) {

        case SERIES_TYPE.SOFTWARE_ENGINEERING: {
            return (<SeriesCardSoftwareEngineering
                series={props.series as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>}
            />);
        }
        case SERIES_TYPE.VIDEO_GAME_STREAMING: {
            return (<SeriesCardVideoGameStreaming
                series={props.series as SeriesEntity<SERIES_TYPE.VIDEO_GAME_STREAMING>}
            />);
        }
    }

    logger.warning("unknown series type", props.series.type);
    return null;
};
