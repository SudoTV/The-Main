/**
* @autror WMXPY
* @namespace Components_MDX
* @description Tr
*/

import * as React from "react";

export type MDX_TrProps = {

    readonly children?: any;
};

export const MDX_Tr: React.FC<MDX_TrProps> = (props: MDX_TrProps) => {

    return (
        <tr
            className="border border-gray-300 dark:border-gray-700"
        >
            {props.children}
        </tr>
    );
};
