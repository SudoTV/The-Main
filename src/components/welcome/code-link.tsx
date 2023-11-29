/**
* @author WMXPY
* @namespace Components_Welcome
* @description Code Link
*/

import Link from "next/link";
import * as React from "react";

export type CodeLinkProps = {

    readonly href: string;
    readonly children?: React.ReactNode;
};

export const CodeLink: React.FC<CodeLinkProps> = (props: CodeLinkProps) => {

    return (<Link
        href={props.href}
        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 hover:underline"
    >
        {props.children}
    </Link>);
};
