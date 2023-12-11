/**
* @author WMXPY
* @namespace Components_MDX
* @description H2
*/

import * as React from "react";
import { getTitleAnchor } from "@/util/anchor";

export type MDX_H2Props = {

    readonly children?: any;
};

export const MDX_H2: React.FC<MDX_H2Props> = (props: MDX_H2Props) => {

    const anchor = getTitleAnchor(props.children);
    const link = `#${anchor}`;

    return (
        <h2
            id={anchor}
            className="text-xl font-semibold my-2"
        >
            <a
                href={link}
                className="anchor-link text-blue-500 dark:text-blue-300 hover:underline"
            >
                §
            </a>
            &nbsp;
            {props.children}
        </h2>
    );
};
