/**
* @author WMXPY
* @namespace Components_MDX
* @description H1
*/

import * as React from "react";

export type MDX_H1Props = {

    readonly children?: any;
};

export const MDX_H1: React.FC<MDX_H1Props> = (props: MDX_H1Props) => {

    return (
        <h1
            className="text-3xl font-bold my-4"
        >
            {props.children}
        </h1>
    );
};
