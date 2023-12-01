/**
* @author WMXPY
* @namespace Components_MDX
* @description Code
*/

import * as React from "react";

export type MDX_CodeProps = {

    readonly children?: any;
};

export const MDX_Code: React.FC<MDX_CodeProps> = (props: MDX_CodeProps) => {

    return (
        <code
            className=" bg-gray-200 dark:bg-gray-800 dark:text-white rounded-sm px-2"
        >
            {props.children}
        </code>
    );
};
