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

export type MainPageWrapperProps = {

    readonly locale: IETF_LOCALE;

    readonly breadcrumbElements?: BreadcrumbElement[];
    readonly cacheableResponse?: CacheableResponse<any>;

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
            className="flex flex-col items-start justify-between px-4 py-2 mx-auto w-full max-w-screen-xl"
        >
            {props.children}
        </main>
        {props.cacheableResponse
            ? <div
                className="w-full mx-auto max-w-screen-xl px-4 py-2"
            >
                <CachedIndicator
                    cacheableResponse={props.cacheableResponse}
                    locale={props.locale}
                />
            </div>
            : null}
    </React.Fragment>);
};
