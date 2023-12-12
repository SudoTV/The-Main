/**
* @author WMXPY
* @namespace Components_Welcome
* @description Code Link
*/

import { HrefConfig } from "@/util/href";
import Link from "next/link";
import * as React from "react";

export type CodeLinkProps = {

    readonly href: HrefConfig;
    readonly children?: React.ReactNode;
};

export const CodeLink: React.FC<CodeLinkProps> = (props: CodeLinkProps) => {

    return (<Link
        href={props.href.href}
        rel={props.href.external ? "noopener noreferrer" : undefined}
        target={props.href.external ? "_blank" : undefined}
        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 hover:underline"
    >
        {props.children}
    </Link>);
};
