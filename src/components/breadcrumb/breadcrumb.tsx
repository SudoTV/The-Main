/**
* @author WMXPY
* @namespace Components_Breadcrumb
* @description Breadcrumb
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { HrefConfig } from "../../util/href";
import { FaCaretRight } from "react-icons/fa6";

export type BreadcrumbElement = {

    readonly name: string;
    readonly href: HrefConfig;
};

export type BreadcrumbProps = {

    readonly locale: IETF_LOCALE;
    readonly elements: BreadcrumbElement[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props: BreadcrumbProps) => {

    return (<nav
        className="flex mx-auto w-full max-w-screen-xl px-4 py-2"
        aria-label="Breadcrumb"
    >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Home
                </a>
            </li>
            <li className="inline-flex items-center">
                <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    <FaCaretRight />
                    <span>Home</span>
                </a>
            </li>
            <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <FaCaretRight />
                    <span>Home</span>
                </a>
            </li>
        </ol>
    </nav>);
};
