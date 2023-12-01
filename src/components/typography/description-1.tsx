/**
* @author WMXPY
* @namespace Components_Typography
* @description Description 1
*/

import * as React from "react";

export type Description1Props = {

    readonly children?: any;
};

export const Description1: React.FC<Description1Props> = (props: Description1Props) => {

    return (
        <p
            className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
            {props.children}
        </p>
    );
};
