/**
* @author WMXPY
* @namespace Components_MDX
* @description Pre
*/

import * as React from "react";

export type MDX_PreProps = {

    readonly children?: any;
};

export const MDX_Pre: React.FC<MDX_PreProps> = (props: MDX_PreProps) => {

    return (
        <pre
            className="w-full text-sm sm:text-base text-left rounded-md py-2 px-4 whitespace-pre-wrap bg-gray-200 dark:bg-gray-800 dark:text-white [&>code]:p-0 [&>code]:w-full"
        >
            {props.children}
        </pre>
    );
};
