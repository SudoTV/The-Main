/**
* @author WMXPY
* @namespace Components_Header
* @description Header
*/

import Link from "next/link";
import * as React from "react";

export const LayoutHeader: React.FC = () => {

    return (
        <header
            className="w-full"
        >
            <nav
                className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
            >
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
                >
                    <Link
                        href="/"
                        className="flex items-center"
                    >
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            {">"}&nbsp;
                        </span>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >
                            SudoTV
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
