/**
* @author WMXPY
* @namespace Components_Series_DeepDive_EpisodePractices
* @description No Practice
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { seriesInternationalization } from "@/dictionary/series/_intl";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { SIZE } from "@/util/size";
import { ContributeRedirectionCard } from "../../../contribute/contribute-redirection-card";
import { Description2 } from "../../../typography/description-2";

export type SeriesDeepDiveEpisodePracticesNoPracticeProps = {

    readonly locale: IETF_LOCALE;
};

export const SeriesDeepDiveEpisodePracticesNoPractice: React.FC<SeriesDeepDiveEpisodePracticesNoPracticeProps> = (
    props: SeriesDeepDiveEpisodePracticesNoPracticeProps,
) => {

    const seriesFormat = seriesInternationalization.format(props.locale);

    return (<React.Fragment>
        <Description2>
            {seriesFormat.get(SERIES_PROFILE.NO_PRACTICE_DESCRIPTION)}
        </Description2>
        <ContributeRedirectionCard
            locale={props.locale}
            size={SIZE.SMALL}
        />
    </React.Fragment>);
};
