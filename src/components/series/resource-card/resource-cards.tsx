/**
* @author WMXPY
* @namespace Components_Series_ResourceCard
* @description Resource Cards
*/

import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { useLocale } from "@/i18n/use-locale";
import { SIZE } from "@/util/size";
import { SeriesResourceCardGeneralForum } from "./general/forum";
import { SeriesResourceCardSoftwareEngineeringIssue } from "./software-engineering/issue";
import { SeriesResourceCardSoftwareEngineeringRepository } from "./software-engineering/repository";
import { SeriesResourceCardVideoGameStreamingGameSite } from "./video-game-streaming/game-site";

export type SeriesResourceCardsProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
};

export const SeriesResourceCards: React.FC<SeriesResourceCardsProps> = (
    props: SeriesResourceCardsProps,
) => {

    const locale = useLocale();
    const seriesFormat = seriesInternationalization.format(locale);

    switch (props.series.type) {

        case SERIES_TYPE.SOFTWARE_ENGINEERING:
            return (
                <div
                    className="flex w-full gap-4 flex-col sm:flex-row"
                >
                    <SeriesResourceCardSoftwareEngineeringRepository
                        series={props.series as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>}
                        seriesFormat={seriesFormat}
                        size={SIZE.SMALL}
                        className="flex-1"
                    />
                    <SeriesResourceCardSoftwareEngineeringIssue
                        series={props.series as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>}
                        seriesFormat={seriesFormat}
                        size={SIZE.SMALL}
                        className="flex-1"
                    />
                    <SeriesResourceCardGeneralForum
                        series={props.series}
                        seriesFormat={seriesFormat}
                        size={SIZE.SMALL}
                        className="flex-1"
                    />
                </div>
            );
        case SERIES_TYPE.VIDEO_GAME_STREAMING:
            return (
                <div
                    className="flex w-full gap-4 flex-col sm:flex-row"
                >
                    <SeriesResourceCardVideoGameStreamingGameSite
                        series={props.series as SeriesEntity<SERIES_TYPE.VIDEO_GAME_STREAMING>}
                        seriesFormat={seriesFormat}
                        size={SIZE.SMALL}
                        className="flex-1"
                        locale={locale}
                    />
                    <SeriesResourceCardGeneralForum
                        series={props.series}
                        seriesFormat={seriesFormat}
                        size={SIZE.SMALL}
                        className="flex-1"
                    />
                </div>
            );
    }
};
