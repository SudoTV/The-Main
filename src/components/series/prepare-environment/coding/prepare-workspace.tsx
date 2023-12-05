/**
* @author WMXPY
* @namespace Components_Series_PrepareEnvironment_Coding
* @description Prepare Workspace
*/

import * as React from "react";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import EnglishUnitedStates from "../../../../dictionary/episode/coding/prepare-environment/prepare-workspace/en-US.mdx";
import ChineseSimplified from "../../../../dictionary/episode/coding/prepare-environment/prepare-workspace/zh-CN.mdx";
import { useLocale } from "../../../../i18n/use-locale";
import { buildRepositoryForkUrl, buildRepositoryUrl } from "../../../../util/url-builder/repository";
import { MDXLocaleSwitcher } from "../../../mdx/locale-switcher";

export type SeriesEpisodePrepareEnvironmentCodingPrepareWorkspaceProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly episode: EpisodeEntity<EPISODE_TYPE.CODING>;
};

export const SeriesEpisodePrepareEnvironmentCodingPrepareWorkspace: React.FC<SeriesEpisodePrepareEnvironmentCodingPrepareWorkspaceProps> = (
    props: SeriesEpisodePrepareEnvironmentCodingPrepareWorkspaceProps,
) => {

    const locale = useLocale();

    const forkUrl: string = buildRepositoryForkUrl(
        props.series.repository,
        "<YOUR-USERNAME>",
    );

    const rootUrl: string = buildRepositoryUrl(
        props.series.repository,
    );

    return (<MDXLocaleSwitcher
        zh-CN={ChineseSimplified}
        en-US={EnglishUnitedStates}
        parameters={{
            repositoryName: props.series.title[locale],
            beforeTag: props.episode.git["before-tag"],
            forkUrl,
            rootUrl,
        }}
    />);
};
