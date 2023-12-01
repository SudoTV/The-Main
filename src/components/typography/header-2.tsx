/**
* @author WMXPY
* @namespace Components_Typography
* @description Header 2
*/

import * as React from "react";

export type Header2Props = {

    readonly children?: any;

    readonly noMargin?: boolean;
};

export const Header2: React.FC<Header2Props> = (props: Header2Props) => {

    const classes: string[] = [
        "text-2xl",
        "font-semibold",
        "lg:text-3xl",
    ];

    if (!props.noMargin) {
        classes.push("mb-3");
    }

    return (
        <h2
            className={classes.join(" ")}
        >
            {props.children}
        </h2>
    );
};
