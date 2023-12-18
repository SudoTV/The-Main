/**
* @author WMXPY
* @namespace Components_MDX
* @description Pre
*/

"use client";

import { codeInternationalization } from "@/dictionary/code/_intl";
import { CODE_PROFILE } from "@/dictionary/code/_profile";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";

export type MDX_PreProps = {

    readonly locale: IETF_LOCALE;
    readonly code: string;
};

export const MDXCopyCodeButton: React.FC<MDX_PreProps> = (props: MDX_PreProps) => {

    const [copied, setCopied] = React.useState<boolean>(false);

    const copyCode = React.useCallback(() => {

        const parsedCode: string = Array.isArray(props.code)
            ? props.code.join("")
            : props.code;

        navigator.clipboard.writeText(String(parsedCode));
        setCopied(true);
    }, [props.code]);

    React.useEffect(() => {

        if (copied) {
            const timeout: NodeJS.Timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);

            return () => {
                clearTimeout(timeout);
            };
        }
        return;
    }, [copied]);

    const format = codeInternationalization.format(props.locale);

    return (<button
        className="rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-700 text-xs sm:text-sm font-sans select-none"
        onClick={copyCode}
    >
        {copied
            ? format.get(CODE_PROFILE.CODE_COPIED)
            : format.get(CODE_PROFILE.COPY_CODE)}
    </button>);
};
