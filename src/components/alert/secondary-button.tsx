/**
* @author WMXPY
* @namespace Components_Alert
* @description Secondary Button
*/

import * as React from "react";
import { IconType } from "react-icons";
import { ALERT_TYPE } from "./definition";

export type AlertSecondaryButtonProps = {

    readonly icon?: IconType;
    readonly text: React.ReactNode;

    readonly type: ALERT_TYPE;

    readonly onClick?: () => void;
};

const getClasses = (type: ALERT_TYPE): string => {

    switch (type) {

        case ALERT_TYPE.SUCCESS:
            return "hover:text-white dark:hover:text-white text-green-800 border-green-800 hover:bg-green-900 focus:ring-green-200 dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400  dark:focus:ring-green-800";
        case ALERT_TYPE.WARNING:
            return "hover:text-white dark:hover:text-white text-yellow-800 border-yellow-800 hover:bg-yellow-900 focus:ring-yellow-200 dark:hover:bg-yellow-600 dark:border-yellow-600 dark:text-yellow-400  dark:focus:ring-yellow-800";
        case ALERT_TYPE.DANGER:
            return "hover:text-white dark:hover:text-white text-red-800 border-red-800 hover:bg-red-900 focus:ring-red-200 dark:hover:bg-red-600 dark:border-red-600 dark:text-red-400  dark:focus:ring-red-800";
        case ALERT_TYPE.INFO:
        default:
            return "hover:text-white dark:hover:text-white text-blue-800 border-blue-800 hover:bg-blue-900 focus:ring-blue-200 dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400  dark:focus:ring-blue-800";
    }
};

export const AlertSecondaryButton: React.FC<AlertSecondaryButtonProps> = (props: AlertSecondaryButtonProps) => {

    return (<button
        type="button"
        className={`bg-transparent border focus:ring-4 font-medium rounded-md text-xs px-3 py-1.5 text-center focus:outline-none ${getClasses(props.type)}}`}
        aria-label="Close"
        onClick={props.onClick}
    >
        {props.icon && <props.icon
            size={16}
        />}
        {props.text}
    </button>);
};
