/**
* @author WMXPY
* @namespace Components_MDX
* @description Ul
*/

import * as React from "react";

export type MDX_UlProps = {

    readonly children?: any;
};

export const MDX_Ul: React.FC<MDX_UlProps> = (props: MDX_UlProps) => {

    return (
        <ul
            className="list-disc list-inside my-2"
        >
            {props.children}
        </ul>
    );
};
