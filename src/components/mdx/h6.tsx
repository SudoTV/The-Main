/**
* @author WMXPY
* @namespace Components_MDX
* @description H6
*/

import * as React from "react";

const getAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[ ]/g, "-");
};

export type MDX_H6Props = {

    readonly children?: any;
};

export const MDX_H6: React.FC<MDX_H6Props> = (props: MDX_H6Props) => {

    const anchor = getAnchor(props.children);
    const link = `#${anchor}`;

    return (
        <h6
            id={anchor}
            className="text-base font-bold my-2"
        >
            <a
                href={link}
                className="anchor-link text-blue-500 dark:text-blue-300 hover:underline"
            >
                §
            </a>
            &nbsp;
            {props.children}
        </h6>
    );
};
