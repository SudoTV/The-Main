/**
* @author WMXPY
* @namespace Components_Typography
* @description Header 1
*/

import * as React from "react";

export type Header1Props = {

    readonly children?: any;
};

export const Header1: React.FC<Header1Props> = (props: Header1Props) => {

    return (
        <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white"
        >
            {props.children}
        </h1>
    );
};
