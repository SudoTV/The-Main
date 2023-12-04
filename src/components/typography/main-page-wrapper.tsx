/**
* @author WMXPY
* @namespace Components_Typography
* @description Main Page Wrapper
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { metadataInternationalization } from "../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../dictionary/metadata/_profile";
import { HrefConfig } from "../../util/href";
import { Breadcrumb, BreadcrumbElement } from "../breadcrumb/breadcrumb";

export type MainPageWrapperProps = {

    readonly locale: IETF_LOCALE;
    readonly breadcrumbElements?: BreadcrumbElement[];

    readonly children?: React.ReactNode;
};

export const MainPageWrapper: React.FC<MainPageWrapperProps> = (props: MainPageWrapperProps) => {


    return (<React.Fragment>
        {props.breadcrumbElements
            ? <Breadcrumb
                locale={props.locale}
                elements={props.breadcrumbElements}
            />
            : null}
        <main
            className="flex flex-col items-start justify-between p-6 mx-auto w-full max-w-screen-xl"
        >
            {props.children}
        </main>
    </React.Fragment>);
};
