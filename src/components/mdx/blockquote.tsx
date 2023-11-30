/**
* @author WMXPY
* @namespace Components_MDX
* @description Blockquote
*/

import * as React from "react";

export type MDX_BlockquoteProps = {

    readonly children?: any;
};

export const MDX_Blockquote: React.FC<MDX_BlockquoteProps> = (props: MDX_BlockquoteProps) => {

    return (
        <blockquote
            className="border-l-4 border-gray-400 dark:border-gray-500 pl-2 my-2"
        >
            {props.children}
        </blockquote>
    );
};
