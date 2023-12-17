/**
* @author WMXPY
* @namespace Components_Footer_Icon
* @description Sudosaurus Icon
*/

import { SudosaurusIconTailwind } from "@sudosaurus/icon-react";
import Link from "next/link";
import * as React from "react";

export type LayoutFooterSudosaurusIconProps = {
};

export const LayoutFooterSudosaurusIcon: React.FC<LayoutFooterSudosaurusIconProps> = (
    _props: LayoutFooterSudosaurusIconProps,
) => {

    return (
        <Link
            href="https://www.sudosaurus.com"
            rel="noopener noreferrer"
            target="_blank"
            className=" hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 text-sm dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 transition-colors"
        >
            <SudosaurusIconTailwind
                size={24}
                digest
                foregroundColorClassName="text-black dark:text-white"
                backgroundColorClassName="bg-black dark:bg-white"
            />
        </Link>
    );
};
