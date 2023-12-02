/**
* @author WMXPY
* @namespace Components_Common
* @description Redirection Card
*/

import Link from "next/link";
import * as React from "react";
import { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HrefConfig } from "../../util/href";
import { SIZE } from "../../util/size";

export type RedirectionCardProps = {

    readonly leadTitle?: React.ReactNode;

    readonly title: React.ReactNode;
    readonly titleHref?: HrefConfig;

    readonly subtitle?: React.ReactNode;

    readonly size?: SIZE;

    readonly prefix?: React.ReactNode;
    readonly suffix?: React.ReactNode;

    readonly backgroundIcon?: IconType;

    readonly full?: boolean;
    readonly className?: string;
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

const getSubtitleTextSize = (size: SIZE): string => {

    switch (size) {
        case SIZE.SMALL: return "text-base";
        case SIZE.MEDIUM: return "text-lg";
        case SIZE.LARGE: return "text-2xl";
    }
    return "text-lg";
};

const getBackgroundIconSize = (size: SIZE): number => {

    switch (size) {
        case SIZE.SMALL: return 128;
        case SIZE.MEDIUM: return 192;
        case SIZE.LARGE: return 256;
    }
    return 256;
};

export const RedirectionCard: React.FC<RedirectionCardProps> = (props: RedirectionCardProps) => {

    const size: SIZE = props.size ?? SIZE.MEDIUM;

    const paddingDefault: string = getPaddingDefault(size);
    const paddingSmall: string = getPaddingSmall(size);

    const titleTextSize: string = getTitleTextSize(size);
    const subtitleTextSize: string = getSubtitleTextSize(size);

    const backgroundIconSize: number = getBackgroundIconSize(size);

    const cardClasses: string[] = [
        "relative",

        paddingDefault,
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-sm",
        paddingSmall,
        "dark:bg-gray-800",
        "dark:border-gray-700",
    ];

    if (props.full) {
        cardClasses.push("w-full");
    }

    if (props.className) {
        cardClasses.push(props.className);
    }

    return (
        <div
            className={cardClasses.join(" ")}
        >
            <div
                className="w-full z-20 flex flex-col sm:flex-row gap-5 justify-between"
            >
                {props.prefix
                    ? <div
                        className="flex flex-col items-start"
                    >
                        {props.prefix}
                    </div>
                    : null}
                <div>
                    {props.leadTitle
                        ? <div
                            className={`text-base text-gray-500 sm:${subtitleTextSize} dark:text-gray-400`}
                        >
                            {props.leadTitle}
                        </div>
                        : null}
                    <h5
                        className={`${titleTextSize} font-bold text-gray-900 dark:text-white`}
                    >
                        {props.titleHref
                            ? <Link
                                href={props.titleHref.href}
                                rel={props.titleHref.external ? "noopener noreferrer" : undefined}
                                target={props.titleHref.external ? "_blank" : undefined}
                                className="inline-flex hover:underline items-center gap-2 text-blue-500 dark:text-blue-300"
                            >
                                {props.title}
                                {props.titleHref.external
                                    ? <BiLinkExternal
                                        size={24}
                                    />
                                    : <IoArrowForwardOutline
                                        size={24}
                                    />}
                            </Link>
                            : props.title}
                    </h5>
                    {props.subtitle
                        ? <div
                            className={`text-base text-gray-500 sm:${subtitleTextSize} dark:text-gray-400`}
                        >
                            {props.subtitle}
                        </div>
                        : null}
                </div>
                {props.suffix
                    ? <div
                        className="flex flex-col items-start sm:items-end self-end"
                    >
                        {props.suffix}
                    </div>
                    : null}

            </div>
            {props.backgroundIcon
                ? <div
                    className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden"
                >
                    <props.backgroundIcon
                        size={backgroundIconSize}
                        className="-rotate-12 text-gray-200 dark:text-gray-700 pointer-events-none"
                    />
                </div>
                : null}
        </div>
    );
};
