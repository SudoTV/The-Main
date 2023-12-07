/**
* @author WMXPY
* @namespace Components_Contribute
* @description Contribute Annotation
*/

import { SudooFormat } from "@sudoo/internationalization";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { REPOSITORY_PLATFORM, RepositoryEntity } from "../../data/definition/repository/repository";
import { contributeInternationalization } from "../../dictionary/contribute/_intl";
import { CONTRIBUTE_PROFILE } from "../../dictionary/contribute/_profile";
import { HrefConfig } from "../../util/href";
import { buildRepositoryFileEditUrl, buildRepositoryFolderUrl } from "../../util/url-builder/file";
import { buildRepositoryUrl } from "../../util/url-builder/repository";
import { PowerLink } from "../common/power-link";
import { ContributeAnnotationConfig } from "./repositories";

export type ContributeAnnotationProps = {

    readonly locale: IETF_LOCALE;
    readonly config: ContributeAnnotationConfig;
};

const getTargetName = (
    repository: RepositoryEntity,
    format: SudooFormat<CONTRIBUTE_PROFILE>,
): string => {

    switch (repository.platform) {
        case REPOSITORY_PLATFORM.GITHUB:
            return format.get(CONTRIBUTE_PROFILE.GITHUB_REPOSITORY);

    }
    return "";
};

const getEditUrl = (
    repository: RepositoryEntity,
    branch: string,
    paths: string[],
): string => {

    const isFile: boolean = paths.length > 0
        ? paths[paths.length - 1].includes(".")
        : false;

    if (isFile) {
        return buildRepositoryFileEditUrl(repository, branch, paths);
    }
    return buildRepositoryFolderUrl(repository, branch, paths);
};

export const ContributeAnnotation: React.FC<ContributeAnnotationProps> = (props: ContributeAnnotationProps) => {

    const format = contributeInternationalization.format(props.locale);
    const repositoryUrl = buildRepositoryUrl(props.config.repository);
    const editUrl: string = getEditUrl(props.config.repository, props.config.branch, props.config.paths);

    const divClasses: string[] = [
        "text-gray-400",
        "dark:text-gray-500",
        "text-sm",
    ];

    return (<div
        className={divClasses.join(" ")}
    >
        <div>
            <span>
                {format.get(CONTRIBUTE_PROFILE.THIS_PAGE_IS_RENDERED_BASE_ON)}
            </span>
            &nbsp;
            <PowerLink
                href={HrefConfig.external(repositoryUrl)}
                noIcon
            >
                {getTargetName(props.config.repository, format)}
            </PowerLink>
        </div>
        <div>
            <PowerLink
                href={HrefConfig.external(editUrl)}
                noIcon
            >
                {format.get(CONTRIBUTE_PROFILE.IMPROVE_THIS_PAGE)}
            </PowerLink>
        </div>
    </div>);
};
