/**
* @author WMXPY
* @namespace Components_Common
* @description Power Link
*/

import Link from "next/link";
import * as React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export type PowerLinkProps = {

    readonly href: string;
    readonly children?: React.ReactNode;
};

export const PowerLink: React.FC<PowerLinkProps> = (props: PowerLinkProps) => {

    return (
        <Link
            href={props.href}
            className="inline-flex hover:underline items-center gap-2 text-blue-500 dark:text-blue-300"
        >
            <span>
                {props.children}
            </span>
            <IoArrowForwardOutline />
        </Link>
    );
};
