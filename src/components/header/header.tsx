/**
* @author WMXPY
* @namespace Components_Header
* @description Header
*/

import * as React from "react";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";
import { HrefLink } from "../common/href-link";

export const LayoutHeader: React.FC = () => {

    const locale = useLocale();

    return (
        <header
            className="w-full sticky top-0 z-50"
        >
            <nav
                className="bg-gray-200 border-b-4 border-gray-100 dark:bg-gray-800 dark:border-gray-900 px-4 lg:px-6 py-2.5"
            >
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
                >
                    <HrefLink
                        href={HrefConfig.withinSite(locale)}
                        className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md px-3 py-1 active:bg-gray-400 dark:active:bg-gray-600 transition-colors"
                        noUnderline
                    >
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            {">"}&nbsp;
                        </span>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >
                            SudoTV
                        </span>
                    </HrefLink>
                </div>
            </nav>
        </header>
    );
};
