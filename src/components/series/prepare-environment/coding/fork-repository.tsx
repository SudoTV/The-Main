/**
* @author WMXPY
* @namespace Components_Series_PrepareEnvironment_Coding
* @description Fork Repository
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "@/data/definition/episode/episode";
import EnglishUnitedStates from "@/dictionary/episode/coding/prepare-environment/fork-repository/en-US.mdx";
import ChineseSimplified from "@/dictionary/episode/coding/prepare-environment/fork-repository/zh-CN.mdx";
import { useLocale } from "@/i18n/use-locale";
import { MDXLocaleSwitcher } from "../../../mdx/locale-switcher";
import { SeriesEntity, SERIES_TYPE } from "@/data/definition/series/series";
import { buildRepositoryUrl } from "@/util/url-builder/repository";

export type SeriesEpisodePrepareEnvironmentCodingForkRepositoryProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;
};

export const SeriesEpisodePrepareEnvironmentCodingForkRepository: React.FC<SeriesEpisodePrepareEnvironmentCodingForkRepositoryProps> = (
    props: SeriesEpisodePrepareEnvironmentCodingForkRepositoryProps,
) => {

    const locale = useLocale();

    const repositoryUrl: string = buildRepositoryUrl(props.series.repository);

    return (<MDXLocaleSwitcher
        zh-CN={ChineseSimplified}
        en-US={EnglishUnitedStates}
        parameters={{
            repositoryName: props.series.title[locale],
            repositoryUrl: repositoryUrl,
        }}
    />);
};
