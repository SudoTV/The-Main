/**
* @author WMXPY
* @namespace Components_Series_Episode
* @description Episode Card
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { useLocale } from "../../../i18n/use-locale";
import { FORMAT_DATE_DATE_FORMAT, formatDate } from "../../../util/format-date";
import { SIZE } from "../../../util/size";
import { RedirectionCard } from "../../common/redirection-card";
import { HrefConfig } from "../../../util/href";

export type SeriesEpisodeCardProps = {

    readonly seriesIdentifier: string;
    readonly episode: EpisodeEntity<EPISODE_TYPE>;
};

export const SeriesEpisodeCard: React.FC<SeriesEpisodeCardProps> = (
    props: SeriesEpisodeCardProps,
) => {

    const locale = useLocale();
    const format = seriesInternationalization.format(locale);

    return (<RedirectionCard
        full
        size={SIZE.SMALL}
        title={props.episode.title[locale]}
        titleHref={HrefConfig.withinSite(locale, "series", props.seriesIdentifier, "episode", props.episode.identifier)}
        leadTitle={props.episode.identifier}
        subtitle={formatDate(
            props.episode["release-date"],
            locale,
            {
                dateFormat: FORMAT_DATE_DATE_FORMAT.FULL,
            },
        )}
    />);
};
