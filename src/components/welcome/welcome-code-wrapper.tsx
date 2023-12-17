/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code Wrapper
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";

export type WelcomeCodeWrapperProps = {

    readonly locale: IETF_LOCALE;
    readonly language: string;

    readonly children?: any;
};

export const WelcomeCodeWrapper: React.FC<WelcomeCodeWrapperProps> = (
    props: WelcomeCodeWrapperProps,
) => {

    return (
        <div
            className="w-full"
        >
            <div
                className="border-t-4 border-l-4 border-r-4 border-gray-200 dark:border-gray-800 rounded-t-md py-2 px-4 text-gray-500 dark:text-gray-400 text-sm sm:text-base flex flex-row justify-between items-center"
            >
                <div
                    className="text-gray-500 dark:text-gray-400 pointer-events-none select-none font-mono"
                >
                    {props.language}
                </div>
            </div>
            <pre
                className="w-full text-sm sm:text-base text-left rounded-md rounded-t-none py-2 px-4 whitespace-pre-wrap bg-gray-200 dark:bg-gray-800 dark:text-white"
            >
                <code
                    className="bg-gray-200 dark:bg-gray-800 dark:text-white rounded-sm font-mono"
                >
                    {props.children}
                </code>
            </pre>
        </div>
    );
};
