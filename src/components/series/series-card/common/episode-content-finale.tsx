/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_Common
* @description Episode Content Finale
*/

import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { FORMAT_DATE_DATE_FORMAT, formatDate } from "@/util/format-date";
import { HrefConfig } from "@/util/href";
import { PowerLink } from "../../../common/power-link";

export type SeriesCardEpisodeContentFinaleProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
};

export const SeriesCardEpisodeContentFinale: React.FC<SeriesCardEpisodeContentFinaleProps> = (
    props: SeriesCardEpisodeContentFinaleProps,
) => {

    const locale: IETF_LOCALE = useLocale();
    const format = seriesInternationalization.format(locale);

    const latestEpisode: Optional<EpisodeEntity<EPISODE_TYPE>> =
        Optional.ofUndefinable(
            props.series.episodes
                .sort((
                    a: EpisodeEntity<EPISODE_TYPE>,
                    b: EpisodeEntity<EPISODE_TYPE>,
                ) => {
                    return b["release-date"].getTime() - a["release-date"].getTime();
                })
            [0],
        );

    return (
        <div
            className="flex flex-col items-end"
        >
            {latestEpisode.exists
                ? <div
                    className="text-sm text-gray-500"
                >
                    {format.get(
                        SERIES_PROFILE.FINALE_AT_1,
                        formatDate(
                            latestEpisode.getOrThrow()["release-date"],
                            locale,
                            {
                                dateFormat: FORMAT_DATE_DATE_FORMAT.FULL,
                            },
                        ),
                    )}
                </div>
                : null}
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
