/**
* @author WMXPY
* @namespace Components_MDX
* @description H5
*/

import * as React from "react";

const getAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[ ]/g, "-");
};

export type MDX_H5Props = {

    readonly children?: any;
};

export const MDX_H5: React.FC<MDX_H5Props> = (props: MDX_H5Props) => {

    const anchor = getAnchor(props.children);
    const link = `#${anchor}`;

    return (
        <h5
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
        </h5>
    );
};
