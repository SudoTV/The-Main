/**
* @author WMXPY
* @namespace Components_Series_Title
* @description Series Title Section
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { Description1 } from "../../typography/description-1";
import { Header1 } from "../../typography/header-1";
import { Section } from "../../typography/section";

export type SeriesTitleSectionProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;

    readonly locale: IETF_LOCALE;
};

export const SeriesTitleSection: React.FC<SeriesTitleSectionProps> = (
    props: SeriesTitleSectionProps,
) => {

    const seriesFormat = seriesInternationalization.format(props.locale);

    return (
        <Section>
            {props.series.original
                ? <Description1
                    noMargin
                >
                    {seriesFormat.get(SERIES_PROFILE.ORIGINAL_ANNOTATION)}
                </Description1>
                : null}
            <Header1>
                {props.series.title[props.locale]}
            </Header1>
            <Description1>
                {props.series.description[props.locale]}
            </Description1>
        </Section>
    );
};
