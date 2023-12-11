/**
* @author WMXPY
* @namespace Components_MDX
* @description H3
*/

import * as React from "react";
import { getTitleAnchor } from "@/util/anchor";

export type MDX_H3Props = {

    readonly children?: any;
};

export const MDX_H3: React.FC<MDX_H3Props> = (props: MDX_H3Props) => {

    const anchor = getTitleAnchor(props.children);
    const link = `#${anchor}`;

    return (
        <h3
            id={anchor}
            className="text-lg font-bold my-4"
        >
            <a
                href={link}
                className="anchor-link text-blue-500 dark:text-blue-300 hover:underline"
            >
                §
            </a>
            &nbsp;
            {props.children}
        </h3>
    );
};
