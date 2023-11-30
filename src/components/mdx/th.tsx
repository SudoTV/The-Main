/**
* @author WMXPY
* @namespace Components_MDX
* @description Th
*/

import * as React from "react";

export type MDX_ThProps = {

    readonly children?: any;
};

export const MDX_Th: React.FC<MDX_ThProps> = (props: MDX_ThProps) => {

    return (
        <th
            className="border border-gray-300 dark:border-gray-700 px-4 py-2"
        >
            {props.children}
        </th>
    );
};
