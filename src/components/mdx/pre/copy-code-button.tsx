/**
* @author WMXPY
* @namespace Components_MDX
* @description Pre
*/

"use client";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { codeInternationalization } from "../../../dictionary/code/_intl";
import { CODE_PROFILE } from "../../../dictionary/code/_profile";

export type MDX_PreProps = {

    readonly locale: IETF_LOCALE;
    readonly code: string;
};

export const MDXCopyCodeButton: React.FC<MDX_PreProps> = (props: MDX_PreProps) => {

    const [copied, setCopied] = React.useState<boolean>(false);

    const copyCode = React.useCallback(() => {

        navigator.clipboard.writeText(props.code);
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
        className="rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-700 text-xs sm:text-sm"
        onClick={copyCode}
    >
        {copied
            ? format.get(CODE_PROFILE.CODE_COPIED)
            : format.get(CODE_PROFILE.COPY_CODE)}
    </button>);
};
