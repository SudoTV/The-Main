/**
* @author WMXPY
* @namespace Components_Series_Title
* @description Sub Episode Title Section
*/

import { PowerLink } from "@/components/common/power-link";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "@/data/definition/series/series";
import { HrefConfig } from "@/util/href";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { Description1 } from "../../typography/description-1";
import { Header1 } from "../../typography/header-1";
import { Section } from "../../typography/section";

export type SubEpisodeTitleSectionProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly episode: EpisodeEntity<EPISODE_TYPE>;

    readonly title: React.ReactNode;

    readonly locale: IETF_LOCALE;
};

export const SubEpisodeTitleSection: React.FC<SubEpisodeTitleSectionProps> = (
    props: SubEpisodeTitleSectionProps,
) => {

    return (
        <Section>
            <Description1
                noMargin
            >
                <PowerLink
                    href={HrefConfig.withinSite(props.locale, "series", props.series.identifier, "episode", props.episode.identifier)}
                    reverseArrow
                    replace
                >
                    {props.episode.title[props.locale]}
                </PowerLink>
            </Description1>
            <Header1>
                {props.title}
            </Header1>
            <Description1>
                {props.episode.description[props.locale]}
            </Description1>
        </Section>
    );
};
