/**
* @author WMXPY
* @namespace Components_MDX
* @description Table
*/

import * as React from "react";

export type MDX_TableProps = {

    readonly children?: any;
};

export const MDX_Table: React.FC<MDX_TableProps> = (props: MDX_TableProps) => {

    return (
        <table
            className="table-auto"
        >
            {props.children}
        </table>
    );
};
