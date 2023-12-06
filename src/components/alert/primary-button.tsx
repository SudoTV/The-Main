/**
* @author WMXPY
* @namespace Components_Alert
* @description Primary Button
*/

import * as React from "react";
import { IconType } from "react-icons";
import { ALERT_TYPE } from "./definition";

export type AlertPrimaryButtonProps = {

    readonly icon?: IconType;
    readonly text: React.ReactNode;

    readonly type: ALERT_TYPE;
};

export const getClasses = (type: ALERT_TYPE): string => {

    switch (type) {

        case ALERT_TYPE.SUCCESS:
            return "text-white bg-green-800 hover:bg-green-900 focus:ring-green-200 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
        case ALERT_TYPE.WARNING:
            return "text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-yellow-200 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
        case ALERT_TYPE.DANGER:
            return "text-white bg-red-800 hover:bg-red-900 focus:ring-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
        case ALERT_TYPE.INFO:
        default:
            return "text-white bg-blue-800 hover:bg-blue-900 focus:ring-blue-200  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    }
};

export const AlertPrimaryButton: React.FC<AlertPrimaryButtonProps> = (props: AlertPrimaryButtonProps) => {

    return (<button
        type="button"
        className={`focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center ${getClasses(props.type)}`}
    >
        {props.icon && <props.icon
            size={16}
        />}
        {props.text}
    </button>);
};
