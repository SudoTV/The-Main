/**
* @author WMXPY
* @namespace Components_MDX
* @description H2
*/

import * as React from "react";

const getAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/[ ]/g, "-");
};

export type MDX_H2Props = {

    readonly children?: any;
};

export const MDX_H2: React.FC<MDX_H2Props> = (props: MDX_H2Props) => {

    const anchor = getAnchor(props.children);
    const link = `#${anchor}`;

    return (
        <h2 id={anchor}>
            <a href={link} className="anchor-link">
                §
            </a>
            &nbsp;
            {props.children}
        </h2>
    );
};
