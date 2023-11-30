/**
* @author WMXPY
* @namespace Components_Common
* @description Card Link Button
*/

import Link from "next/link";
import * as React from "react";
import { IconType } from "react-icons";

export type CardButtonProps = {

    readonly icon: IconType;

    readonly href: string;

    readonly prefix?: string;
    readonly title: string;
    readonly suffix?: string;
};

export const CardLinkButton: React.FC<CardButtonProps> = (props: CardButtonProps) => {

    return (
        <Link
            href={props.href}
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-sm inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
            <props.icon
                size="2em"
                className="mr-2"
            />
            <div
                className="text-left rtl:text-right"
            >
                {props.prefix
                    ? <div className="mb-1 text-xs">
                        {props.prefix}
                    </div>
                    : null}
                <div
                    className="-mt-1 text-sm font-semibold"
                >
                    {props.title}
                </div>
                {props.suffix
                    ? <div className="mt-1 text-xs">
                        {props.suffix}
                    </div>
                    : null}
            </div>
        </Link>
    );
};
