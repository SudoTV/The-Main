/**
* @author WMXPY
* @namespace Components_Header
* @description Header
*/

import Link from "next/link";
import * as React from "react";
import { IoLogoGithub } from "react-icons/io5";

export const LayoutHeader: React.FC = () => {

    return (
        <header>
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
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        >
                            SudoTV
                        </span>
                    </Link>
                    {/* <div
                        className="flex items-center lg:order-2"
                    >
                        <Link
                            href="https://github.com/SudoTV"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-2 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        >
                            <IoLogoGithub
                                size={24}
                            />
                        </Link>
                    </div> */}
                </div>
            </nav>
        </header>
    );
};
