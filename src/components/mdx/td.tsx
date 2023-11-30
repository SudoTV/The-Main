/**
* @autdor WMXPY
* @namespace Components_MDX
* @description Td
*/

import * as React from "react";

export type MDX_TdProps = {

    readonly children?: any;
};

export const MDX_Td: React.FC<MDX_TdProps> = (props: MDX_TdProps) => {

    return (
        <td
            className="border border-gray-300 dark:border-gray-700 px-2 py-1"
        >
            {props.children}
        </td>
    );
};
