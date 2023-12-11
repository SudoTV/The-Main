/**
* @author WMXPY
* @namespace Components_Common
* @description Power Link
*/

import Link from "next/link";
import * as React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HrefConfig } from "@/util/href";

export type PowerLinkProps = {

    readonly href: HrefConfig;
    readonly children?: React.ReactNode;

    readonly noIcon?: boolean;
};

export const PowerLink: React.FC<PowerLinkProps> = (props: PowerLinkProps) => {

    return (
        <Link
            href={props.href.href}
            rel={props.href.external ? "noopener noreferrer" : undefined}
            target={props.href.external ? "_blank" : undefined}
            className="inline-flex hover:underline items-center gap-2 text-blue-500 dark:text-blue-300"
        >
            <span>
                {props.children}
            </span>
            {props.noIcon
                ? null
                : props.href.external
                    ? <BiLinkExternal />
                    : <IoArrowForwardOutline />}
        </Link>
    );
};
