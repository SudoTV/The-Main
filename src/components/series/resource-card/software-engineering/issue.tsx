/**
* @author WMXPY
* @namespace Components_Series_ResourceCard_SoftwareEngineering
* @description Issue
*/

import { SudooFormat } from "@sudoo/internationalization";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../../data/definition/series/series";
import { SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM, SoftwareEngineeringSeriesRepositoryEntity } from "../../../../data/definition/series/software-engineering";
import { SERIES_PROFILE } from "../../../../dictionary/series/_profile";
import { HrefConfig } from "../../../../util/href";
import { SIZE } from "../../../../util/size";
import { RedirectionCard } from "../../../common/redirection-card";

const getIssueUrl = (
    repository: SoftwareEngineeringSeriesRepositoryEntity,
): string => {

    switch (repository.platform) {
        case SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM.GITHUB:
            return `https://github.com/${repository.owner}/${repository.repository}/issues`;
    }
    return "";
};

const getIssueTitle = (
    repository: SoftwareEngineeringSeriesRepositoryEntity,
    seriesFormat: SudooFormat<SERIES_PROFILE>,
): string => {

    switch (repository.platform) {
        case SOFTWARE_ENGINEERING_SERIES_REPOSITORY_PLATFORM.GITHUB:
            return seriesFormat.get(SERIES_PROFILE.ISSUE);
    }
    return "";
};

export type SeriesResourceCardSoftwareEngineeringIssueProps = {

    readonly series: SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
    readonly seriesFormat: SudooFormat<SERIES_PROFILE>;

    readonly size?: SIZE;
    readonly className?: string;
};

export const SeriesResourceCardSoftwareEngineeringIssue: React.FC<SeriesResourceCardSoftwareEngineeringIssueProps> = (
    props: SeriesResourceCardSoftwareEngineeringIssueProps,
) => {

    const issueUrl: string = getIssueUrl(props.series.repository);
    const issueTitle: string = getIssueTitle(props.series.repository, props.seriesFormat);

    return (
        <RedirectionCard
            title={issueTitle}
            titleHref={HrefConfig.external(issueUrl)}
            size={props.size}
            className={props.className}
        />
    );
};