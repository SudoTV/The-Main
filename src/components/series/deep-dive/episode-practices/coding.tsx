/**
* @author WMXPY
* @namespace Components_Series_DeepDive_EpisodePractices
* @description Coding
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../data/definition/episode/episode";
import { PracticeEntity } from "../../../../data/definition/practice/practice";
import { Description2 } from "../../../typography/description-2";
import { Header3 } from "../../../typography/header-3";
import { SeriesDeepDiveEpisodePracticesNoPractice } from "./no-practice";
import { PowerLink } from "../../../common/power-link";
import { seriesInternationalization } from "../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../dictionary/series/_profile";
import { HrefConfig } from "../../../../util/href";

export type SeriesDeepDiveEpisodePracticesCodingProps = {

    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;

    readonly locale: IETF_LOCALE;
};

export const SeriesDeepDiveEpisodePracticesCoding: React.FC<SeriesDeepDiveEpisodePracticesCodingProps> = (
    props: SeriesDeepDiveEpisodePracticesCodingProps,
) => {

    if (props.episode.practices.length === 0) {
        return (<SeriesDeepDiveEpisodePracticesNoPractice
            locale={props.locale}
        />);
    }

    const seriesFormat = seriesInternationalization.format(props.locale);

    return (<React.Fragment>
        {props.episode.practices.map((practice: PracticeEntity) => {
            return (<div
                key={practice.identifier}
            >
                <Header3>
                    {practice.title[props.locale]}
                </Header3>
                <Description2>
                    {practice.description[props.locale]}
                </Description2>
                {practice.forum[props.locale]
                    ? <PowerLink
                        href={HrefConfig.external(practice.forum[props.locale]!.url)}
                    >
                        {seriesFormat.get(SERIES_PROFILE.SHARE_AND_DISCUSS_PRACTICE)}
                    </PowerLink>
                    : null}
            </div>);
        })}
    </React.Fragment>);
};
