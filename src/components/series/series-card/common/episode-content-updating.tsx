/**
* @author WMXPY
* @namespace Components_Series_SeriesCard_Common
* @description Episode Content Updating
*/

import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "@/data/definition/video/video-platform";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { useLocale } from "@/i18n/use-locale";
import { FORMAT_DATE_DATE_FORMAT, formatDate } from "@/util/format-date";
import { HrefConfig } from "@/util/href";
import { findLatestEpisode } from "@/util/series/latest-episode";
import { IETF_LOCALE } from "@sudoo/locale";
import { Optional } from "@sudoo/optional";
import * as React from "react";
import { PowerLink } from "../../../common/power-link";
import { VideoVideoButton } from "../../../video/video-button/video-button";

type EpisodeProps = {

    readonly episode: EpisodeEntity<EPISODE_TYPE>;
    readonly locale: IETF_LOCALE;
};

const Episode: React.FC<EpisodeProps> = (
    props: EpisodeProps,
) => {

    const videos: Array<VideoPlatformEntity<VIDEO_PLATFORM_TYPE>> =
        props.episode.videos[props.locale] ?? [];

    return (
        <div
            className="flex flex-row gap-2 mt-2"
        >
            {videos.map((
                video: VideoPlatformEntity<VIDEO_PLATFORM_TYPE>,
                index: number,
            ) => {
                return (<VideoVideoButton
                    key={index}
                    video={video}
                />);
            })}
        </div>
    );
};

export type SeriesCardEpisodeContentUpdatingProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
};

export const SeriesCardEpisodeContentUpdating: React.FC<SeriesCardEpisodeContentUpdatingProps> = (
    props: SeriesCardEpisodeContentUpdatingProps,
) => {

    const locale: IETF_LOCALE = useLocale();
    const format = seriesInternationalization.format(locale);

    const latestEpisode: Optional<EpisodeEntity<EPISODE_TYPE>> =
        findLatestEpisode(props.series.episodes);

    return (
        latestEpisode.exists
            ? <div
                className="flex flex-col items-end"
            >
                <div
                    className="text-sm text-gray-500"
                >
                    {format.get(SERIES_PROFILE.LATEST_EPISODE)}
                    &nbsp;
                    {format.get(
                        SERIES_PROFILE.UPDATED_AT_1,
                        formatDate(
                            latestEpisode.getOrThrow()["release-date"],
                            locale,
                            {
                                dateFormat: FORMAT_DATE_DATE_FORMAT.FULL,
                            },
                        ),
                    )}
                </div>
                <div
                    className="font-semibold text-base sm:text-lg"
                >
                    <PowerLink
                        href={HrefConfig.withinSite(locale, "series", props.series.identifier, "episode", latestEpisode.getOrThrow().identifier)}
                    >
                        {latestEpisode.getOrThrow().title[locale]}
                    </PowerLink>
                </div>
                <Episode
                    episode={latestEpisode.getOrThrow()}
                    locale={locale}
                />
            </div>
            : null
    );
};
