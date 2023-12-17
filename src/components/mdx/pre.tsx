/**
* @author WMXPY
* @namespace Components_MDX
* @description Pre
*/

import { useLocale } from "@/i18n/use-locale";
import { extractLanguageFromClassName } from "@/util/extract-language";
import * as React from "react";
import { MDX_Code } from "./code";
import { MDXCopyCodeButton } from "./pre/copy-code-button";

export type MDX_PreProps = {

    readonly children?: any;

    readonly language?: string;
};

export const MDX_Pre: React.FC<MDX_PreProps> = (props: MDX_PreProps) => {

    const locale = useLocale();

    const children = props.children;
    if (!children || children.type !== MDX_Code) {
        return null;
    };

    const language: string = typeof props.language === "string"
        ? props.language
        : extractLanguageFromClassName(children.props.className);

    return (
        <div>
            <div
                className="border-t-4 border-l-4 border-r-4 border-gray-200 dark:border-gray-800 rounded-t-md py-2 px-4 text-gray-500 dark:text-gray-400 text-sm sm:text-base flex flex-row justify-between items-center"
            >
                <div
                    className="text-gray-500 dark:text-gray-400 pointer-events-none select-none font-mono"
                >
                    {language}
                </div>
                <div>
                    <MDXCopyCodeButton
                        locale={locale}
                        code={children.props.children}
                    />
                </div>
            </div>
            <pre
                className="w-full text-sm sm:text-base text-left rounded-md rounded-t-none py-2 px-4 whitespace-pre-wrap bg-gray-200 dark:bg-gray-800 dark:text-white [&>code]:p-0 [&>code]:w-full"
            >
                <code
                    className="bg-gray-200 dark:bg-gray-800 dark:text-white rounded-sm font-mono"
                >
                    {children.props.children}
                </code>
            </pre>
        </div>
    );
};
