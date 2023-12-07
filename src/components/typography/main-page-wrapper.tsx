/**
* @author WMXPY
* @namespace Components_Typography
* @description Main Page Wrapper
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { CacheableResponse } from "../../data/cache/definition";
import { Breadcrumb, BreadcrumbElement } from "../breadcrumb/breadcrumb";
import { CachedIndicator } from "../cache/cached-indicator";
import { ContributeAnnotation } from "../contribute/contribute-annotation";
import { ContributeAnnotationConfig } from "../contribute/repositories";

export type MainPageWrapperProps = {

    readonly locale: IETF_LOCALE;

    readonly breadcrumbElements?: BreadcrumbElement[];
    readonly cacheableResponse?: CacheableResponse<any>;
    readonly contributeAnnotation?: ContributeAnnotationConfig;

    readonly children?: React.ReactNode;
};

const Tail: React.FC<MainPageWrapperProps> = (props: MainPageWrapperProps) => {

    if (props.cacheableResponse && props.contributeAnnotation) {

        return (<div
            className="flex flex-wrap items-start justify-between px-4 py-2 mx-auto w-full max-w-screen-xl"
        >
            <ContributeAnnotation
                config={props.contributeAnnotation}
                locale={props.locale}
            />
            <CachedIndicator
                cacheableResponse={props.cacheableResponse}
                locale={props.locale}
                reversed
            />
        </div>);
    }

    if (props.cacheableResponse) {
        return (<div
            className="w-full mx-auto max-w-screen-xl px-4 py-2"
        >
            <CachedIndicator
                cacheableResponse={props.cacheableResponse}
                locale={props.locale}
            />
        </div>);
    }

    if (props.contributeAnnotation) {
        return (<div
            className="w-full mx-auto max-w-screen-xl px-4 py-2"
        >
            <ContributeAnnotation
                config={props.contributeAnnotation}
                locale={props.locale}
            />
        </div>);
    }

    return null;
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
            className="flex flex-col items-start justify-between px-4 py-2 mx-auto w-full max-w-screen-xl"
        >
            {props.children}
        </main>
        <Tail
            {...props}
        />
    </React.Fragment>);
};
