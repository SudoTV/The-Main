/**
* @author WMXPY
* @namespace Components_Welcome
* @description Code Button
*/
"use client";

import * as React from "react";

export type CodeAlertButtonProps = {

    readonly message: string;
    readonly children?: React.ReactNode;
};

export const CodeAlertButton: React.FC<CodeAlertButtonProps> = (props: CodeAlertButtonProps) => {

    return (<span
        onClick={() => {
            alert(props.message);
        }}
        className="cursor-pointer text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 hover:underline"
    >
        {props.children}
    </span>);
};
