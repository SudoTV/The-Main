/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier
 * @description Layout
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { EmptyValueSymbol } from "@sudoo/symbol";
import type { Metadata } from "next";
import { CacheableResponse } from "../../../../../data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../../data/definition/series/series";
import { requestSeriesMetadata } from "../../../../../data/request/series-metadata";
import { metadataInternationalization } from "../../../../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../../../../dictionary/metadata/_profile";
import { useLocale } from "../../../../../i18n/use-locale";
import { logger } from "../../../../../util/log";

type Props = {

    readonly params: {
        readonly "series-name": string;
        readonly "episode-identifier": string;
    };
};

export async function generateMetadata(props: Props): Promise<Metadata> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale: IETF_LOCALE = useLocale();
    const profile = metadataInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol> =
        await requestSeriesMetadata(props.params["series-name"]);

    if (series.data === EmptyValueSymbol) {

        logger.error("Series Not Found", props.params["series-name"]);
        return {};
    }

    const episode: EpisodeEntity<EPISODE_TYPE> | undefined =
        series.data.episodes.find((each) => {
            return each.identifier === props.params["episode-identifier"];
        });

    if (!episode) {

        logger.error("Episode Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return {};
    }

    const seriesTitle: string = series.data.title[locale] as string;
    const episodeTitle: string = episode.title[locale] as string;

    return {
        title: profile.get(
            METADATA_PROFILE.SERIES_SERIES_EPISODES_EPISODE_TITLE_2,
            episodeTitle,
            seriesTitle,
        ),
        description: profile.get(
            METADATA_PROFILE.SERIES_SERIES_EPISODES_EPISODE_DESCRIPTION_2,
            episodeTitle,
            seriesTitle,
        ),
    };
};

export default function Layout(props: {
    children: React.ReactNode,
}) {

    return props.children;
}
