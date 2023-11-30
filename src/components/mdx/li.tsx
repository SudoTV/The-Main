/**
* @author WMXPY
* @namespace Components_MDX
* @description Li
*/

import * as React from "react";

export type MDX_LiProps = {

    readonly children?: any;
};

export const MDX_Li: React.FC<MDX_LiProps> = (props: MDX_LiProps) => {

    return (
        <li
            className="my-1"
        >
            {props.children}
        </li>
    );
};
