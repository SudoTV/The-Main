/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_SoftwareEngineering
* @description Video Game Streaming Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaGamepad } from "react-icons/fa6";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { RedirectionCard } from "../../../common/redirection-card";
import { SeriesCardEpisodeContent } from "../common/episode-content";
import { SeriesCardPrefix } from "../series-prefix";

export type SeriesCardVideoGameStreamingProps = {

    readonly series: SeriesEntity<SERIES_TYPE.VIDEO_GAME_STREAMING>;
};

export const SeriesCardVideoGameStreaming: React.FC<SeriesCardVideoGameStreamingProps> = (
    props: SeriesCardVideoGameStreamingProps,
) => {

    const series: SeriesEntity<SERIES_TYPE.VIDEO_GAME_STREAMING> = props.series;

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
            backgroundIcon={FaGamepad}
        />
    );
};
