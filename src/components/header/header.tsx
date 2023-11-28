/**
* @author WMXPY
* @namespace Components_Header
* @description Header
*/

import * as React from "react";

export const LayoutHeader: React.FC = () => {

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://sudo.tv">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SudoTV</span>
                    </a>
                    <div className="w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#">GitHub</a>
                            </li>
                            <li>
                                <a href="#">BiliBili</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
