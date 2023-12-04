/**
* @author WMXPY
* @namespace Components_Breadcrumb
* @description Breadcrumb
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaCaretRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { HrefConfig } from "../../util/href";
import { HrefLink } from "../common/href-link";

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
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse flex-wrap">
            <li className="inline-flex items-center">
                <HrefLink
                    href={HrefConfig.withinSite(props.locale)}
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <IoHome
                        size={18}
                    />
                </HrefLink>
            </li>
            {props.elements.map((
                element: BreadcrumbElement,
                index: number,
            ) => {

                const isLast: boolean = index === props.elements.length - 1;

                return (<li
                    aria-current={isLast ? "page" : undefined}
                    className="inline-flex items-center"
                    key={index}
                >
                    <div
                        className="pr-2 text-gray-700 dark:text-gray-400"
                    >
                        <FaCaretRight
                            size={16}
                        />
                    </div>
                    {isLast
                        ? <span
                            className="text-medium font-medium text-gray-700  dark:text-gray-400"
                        >
                            {element.name}
                        </span>
                        : <HrefLink
                            href={element.href}
                            className="text-medium font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                            <span>{element.name}</span>
                        </HrefLink>}
                </li>);
            })}
        </ol>
    </nav>);
};
