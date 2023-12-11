/**
* @author WMXPY
* @namespace Components_Series_ResourceCard_SoftwareEngineering
* @description Repository
*/

import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { REPOSITORY_PLATFORM, RepositoryEntity } from "../../../../data/definition/repository/repository";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SERIES_PROFILE } from "@/dictionary/series/_profile";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { buildRepositoryUrl } from "@/util/url-builder/repository";
import { RedirectionCard } from "../../../common/redirection-card";

const getRepositoryTitle = (
    repository: RepositoryEntity,
    seriesFormat: SudooFormat<SERIES_PROFILE>,
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return seriesFormat.get(SERIES_PROFILE.GITHUB);
    }
    return "";
};

export type SeriesResourceCardSoftwareEngineeringRepositoryProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly seriesFormat: SudooFormat<SERIES_PROFILE>;

    readonly size?: SIZE;
    readonly className?: string;
};

export const SeriesResourceCardSoftwareEngineeringRepository: React.FC<SeriesResourceCardSoftwareEngineeringRepositoryProps> = (
    props: SeriesResourceCardSoftwareEngineeringRepositoryProps,
) => {

    const repositoryUrl: string = buildRepositoryUrl(props.series.repository);
    const repositoryTitle: string = getRepositoryTitle(props.series.repository, props.seriesFormat);

    return (
        <RedirectionCard
            title={repositoryTitle}
            titleHref={HrefConfig.external(repositoryUrl)}
            size={props.size}
            className={props.className}
        />
    );
};
