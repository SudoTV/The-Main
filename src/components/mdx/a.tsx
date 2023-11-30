/**
* @author WMXPY
* @namespace Components_MDX
* @description A
*/

import * as React from "react";

export type MDX_AProps = {

    readonly href?: string;
    readonly children?: any;
};

export const MDX_A: React.FC<MDX_AProps> = (props: MDX_AProps) => {

    return (
        <a
            href={props.href}
            className="text-blue-500 dark:text-blue-300 hover:underline cursor-pointer"
        >
            {props.children}
        </a>
    );
};
