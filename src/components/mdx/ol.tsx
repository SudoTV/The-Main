/**
* @author WMXPY
* @namespace Components_MDX
* @description Ol
*/

import * as React from "react";

export type MDX_OlProps = {

    readonly children?: any;
};

export const MDX_Ol: React.FC<MDX_OlProps> = (props: MDX_OlProps) => {

    return (
        <ol
            className="list-decimal list-inside my-2"
        >
            {props.children}
        </ol>
    );
};
