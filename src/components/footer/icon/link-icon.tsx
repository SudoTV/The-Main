/**
* @author WMXPY
* @namespace Components_Footer_Icon
* @description Link Icon
*/

import Link from "next/link";
import * as React from "react";
import { IconType } from "react-icons";
import { HrefConfig } from "@/util/href";

export type LayoutFooterLinkIconProps = {

    readonly icon: IconType;
    readonly href: HrefConfig;
};

export const LayoutFooterLinkIcon: React.FC<LayoutFooterLinkIconProps> = (
    props: LayoutFooterLinkIconProps,
) => {

    return (
        <Link
            href={props.href.href}
            rel={props.href.external ? "noopener noreferrer" : undefined}
            target={props.href.external ? "_blank" : undefined}
            className="text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-1 sm:px-2 lg:px-3 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 transition-colors"
        >
            <props.icon
                size={24}
            />
        </Link>
    );
};
