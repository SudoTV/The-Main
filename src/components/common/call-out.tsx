/**
* @author WMXPY
* @namespace Components_Common
* @description Call Out
*/

import Link from "next/link";
import * as React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

export enum CALL_OUT_TYPE {

    WARNING = "WARNING",
}

export type CallOutProps = {

    readonly href: string;
    readonly children?: React.ReactNode;
};

export const CallOut: React.FC<CallOutProps> = (props: CallOutProps) => {

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
