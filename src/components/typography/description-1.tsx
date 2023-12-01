/**
* @author WMXPY
* @namespace Components_Typography
* @description Description 1
*/

import * as React from "react";

export type Description1Props = {

    readonly children?: any;

    readonly noMargin?: boolean;
};

export const Description1: React.FC<Description1Props> = (props: Description1Props) => {

    const classes: string[] = [
        "text-lg",
        "font-normal",
        "text-gray-500",
        "lg:text-xl",
        "dark:text-gray-400",
    ];

    if (!props.noMargin) {
        classes.push("mb-4");
    }

    return (
        <p
            className={classes.join(" ")}
        >
            {props.children}
        </p>
    );
};
