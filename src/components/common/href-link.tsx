/**
* @author WMXPY
* @namespace Components_Common
* @description Href Link
*/

import Link from "next/link";
import * as React from "react";
import { HrefConfig } from "../../util/href";

export type HrefLinkProps = {

    readonly href: HrefConfig;
    readonly children?: React.ReactNode;

    readonly className?: string;

    readonly noUnderline?: boolean;
};

export const HrefLink: React.FC<HrefLinkProps> = (props: HrefLinkProps) => {

    const classes: string[] = [];

    if (!props.noUnderline) {
        classes.push("hover:underline");
    }

    if (props.className) {
        classes.push(props.className);
    }

    return (
        <Link
            href={props.href.href}
            className={classes.join(" ")}
        >
            {props.children}
        </Link>
    );
};
