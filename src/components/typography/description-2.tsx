/**
* @author WMXPY
* @namespace Components_Typography
* @description Description 2
*/

import * as React from "react";

export type Description2Props = {

    readonly children?: any;

    readonly noMargin?: boolean;
};

export const Description2: React.FC<Description2Props> = (props: Description2Props) => {

    const classes: string[] = [
        "text-base",
        "font-normal",
        "text-gray-600",
        "dark:text-gray-300",
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
