/**
* @author WMXPY
* @namespace Components_Common
* @description Redirection Card
*/

import Link from "next/link";
import * as React from "react";
import { SIZE } from "../../util/size";
import { IoArrowForwardOutline } from "react-icons/io5";

export type RedirectionCardProps = {

    readonly title: string;
    readonly titleHref?: string;

    readonly description?: string;

    readonly size?: SIZE;

    readonly prefix?: React.ReactNode;
    readonly suffix?: React.ReactNode;
};

const getPaddingDefault = (size: SIZE): string => {

    switch (size) {
        case SIZE.SMALL: return "p-2";
        case SIZE.MEDIUM: return "p-4";
        case SIZE.LARGE: return "p-6";
    }
    return "p-4";
};

const getPaddingSmall = (size: SIZE): string => {

    switch (size) {
        case SIZE.SMALL: return "sm:p-6";
        case SIZE.MEDIUM: return "sm:p-8";
        case SIZE.LARGE: return "sm:p-10";
    }
    return "sm:p-8";
};

const getTitleTextSize = (size: SIZE): string => {

    switch (size) {
        case SIZE.SMALL: return "text-2xl";
        case SIZE.MEDIUM: return "text-3xl";
        case SIZE.LARGE: return "text-5xl";
    }
    return "text-3xl";
};

const getDescriptionTextSize = (size: SIZE): string => {

    switch (size) {
        case SIZE.SMALL: return "text-base";
        case SIZE.MEDIUM: return "text-lg";
        case SIZE.LARGE: return "text-2xl";
    }
    return "text-lg";
};

export const RedirectionCard: React.FC<RedirectionCardProps> = (props: RedirectionCardProps) => {

    const size: SIZE = props.size ?? SIZE.MEDIUM;

    const paddingDefault: string = getPaddingDefault(size);
    const paddingSmall: string = getPaddingSmall(size);

    const titleTextSize: string = getTitleTextSize(size);
    const descriptionTextSize: string = getDescriptionTextSize(size);

    return (
        <div
            className={`w-full flex flex-col sm:flex-row justify-between ${paddingDefault} bg-white border border-gray-200 rounded-sm ${paddingSmall} dark:bg-gray-800 dark:border-gray-700`}
        >
            {props.prefix
                ? <div
                    className="flex flex-col items-start"
                >
                    {props.prefix}
                </div>
                : null}
            <div>
                <h5
                    className={`${titleTextSize} font-bold text-gray-900 dark:text-white`}
                >
                    {props.titleHref
                        ? <Link
                            href={props.titleHref}
                            className="inline-flex hover:underline items-center gap-2 text-blue-500 dark:text-blue-300"
                        >
                            {props.title}
                            <IoArrowForwardOutline
                                size={24}
                            />
                        </Link>
                        : props.title}
                </h5>
                {props.description
                    ? <p
                        className={`text-base text-gray-500 sm:${descriptionTextSize} dark:text-gray-400`}
                    >
                        {props.description}
                    </p>
                    : null}
            </div>
            {props.suffix
                ? <div
                    className="flex flex-col items-start sm:items-end"
                >
                    {props.suffix}
                </div>
                : null}
        </div>
    );
};
