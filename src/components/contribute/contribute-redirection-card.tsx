/**
* @author WMXPY
* @namespace Components_Contribute
* @description Contribute Redirection Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { contributeInternationalization } from "@/dictionary/contribute/_intl";
import { CONTRIBUTE_PROFILE } from "@/dictionary/contribute/_profile";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { RedirectionCard } from "../common/redirection-card";

export type ContributeRedirectionCardProps = {

    readonly locale: IETF_LOCALE;

    readonly size?: SIZE;
};

export const ContributeRedirectionCard: React.FC<ContributeRedirectionCardProps> = (props: ContributeRedirectionCardProps) => {

    const contributeFormat = contributeInternationalization.format(props.locale);

    return (<RedirectionCard
        title={contributeFormat.get(CONTRIBUTE_PROFILE.UNDERSTAND_HOW_TO_CONTRIBUTE)}
        titleHref={HrefConfig.withinSite(props.locale, "contribute")}
        subtitle={contributeFormat.get(CONTRIBUTE_PROFILE.UNDERSTAND_HOW_TO_CONTRIBUTE_DESCRIPTION)}
        size={props.size}
    />);
};
