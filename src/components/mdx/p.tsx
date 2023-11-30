/**
* @author WMXPY
* @namespace Components_MDX
* @description P
*/

import * as React from "react";

export type MDX_PProps = {

    readonly children?: any;
};

export const MDX_P: React.FC<MDX_PProps> = (props: MDX_PProps) => {

    return (
        <p
            className="my-3"
        >
            {props.children}
        </p>
    );
};
