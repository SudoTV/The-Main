/**
* @author WMXPY
* @namespace Components_Series_Title
* @description Episode Title Section
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { Description1 } from "../../typography/description-1";
import { Header1 } from "../../typography/header-1";
import { Section } from "../../typography/section";

export type EpisodeTitleSectionProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly episode: EpisodeEntity<EPISODE_TYPE>;

    readonly locale: IETF_LOCALE;
};

export const EpisodeTitleSection: React.FC<EpisodeTitleSectionProps> = (
    props: EpisodeTitleSectionProps,
) => {

    return (
        <Section>
            <Description1
                noMargin
            >
                {props.series.title[props.locale]}
            </Description1>
            <Header1>
                {props.episode.title[props.locale]}
            </Header1>
            <Description1>
                {props.episode.description[props.locale]}
            </Description1>
        </Section>
    );
};
