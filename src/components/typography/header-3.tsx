/**
* @author WMXPY
* @namespace Components_Typography
* @description Header 3
*/

import * as React from "react";

export type Header3Props = {

    readonly children?: any;

    readonly noMargin?: boolean;
};

export const Header3: React.FC<Header3Props> = (props: Header3Props) => {

    const classes: string[] = [
        "text-xl",
        "font-semibold",
        "lg:text-2xl",
    ];

    if (!props.noMargin) {
        classes.push("mb-2");
    }

    return (
        <h2
            className={classes.join(" ")}
        >
            {props.children}
        </h2>
    );
};
