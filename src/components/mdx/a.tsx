/**
* @author WMXPY
* @namespace Components_MDX
* @description A
*/

import { headers } from "next/headers";
import * as React from "react";
import { findIsExternalFromHeaders } from "../../util/metadata/find-is-external-from-headers";

export type MDX_AProps = {

    readonly href?: string;

    readonly children?: any;
};

export const MDX_A: React.FC<MDX_AProps> = (props: MDX_AProps) => {

    const headersList = headers();
    const isExternal: boolean = typeof props.href === "string"
        ? findIsExternalFromHeaders(headersList, props.href)
        : false;

    return (
        <a
            href={props.href}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
            className="text-blue-500 dark:text-blue-300 hover:underline cursor-pointer"
        >
            {props.children}
        </a>
    );
};
