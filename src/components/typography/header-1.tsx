/**
* @author WMXPY
* @namespace Components_Typography
* @description Header 1
*/

import * as React from "react";

export type Header1Props = {

    readonly children?: any;

    readonly noMargin?: boolean;
};

export const Header1: React.FC<Header1Props> = (props: Header1Props) => {

    const classes: string[] = [
        "text-4xl",
        "font-extrabold",
        "tracking-tight",
        "leading-none",
        "text-gray-900",
        "dark:text-white",
    ];

    if (!props.noMargin) {
        classes.push("mb-4");
    }

    return (
        <h1
            className={classes.join(" ")}
        >
            {props.children}
        </h1>
    );
};
