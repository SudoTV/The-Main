/**
* @author WMXPY
* @namespace Components_Series_Title
* @description Sub Episode Title Section
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../data/definition/episode/episode";
import { Description1 } from "../../typography/description-1";
import { Header1 } from "../../typography/header-1";
import { Section } from "../../typography/section";

export type SubEpisodeTitleSectionProps = {

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
                {props.episode.title[props.locale]}
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
