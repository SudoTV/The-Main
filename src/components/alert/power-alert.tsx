/**
* @author WMXPY
* @namespace Components_Alert
* @description Power Alert
*/

import * as React from "react";
import { ALERT_TYPE } from "./definition";

export type PowerAlertProps = {

    readonly title: React.ReactNode;
    readonly description: React.ReactNode;

    readonly suffix?: React.ReactNode;

    readonly type: ALERT_TYPE;
};

const getClasses = (type: ALERT_TYPE): string => {

    switch (type) {

        case ALERT_TYPE.SUCCESS:
            return "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800";
        case ALERT_TYPE.WARNING:
            return "text-yellow-800 border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800";
        case ALERT_TYPE.DANGER:
            return "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800";
        case ALERT_TYPE.INFO:
        default:
            return "text-blue-800 border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800";
    }
};

export const PowerAlert: React.FC<PowerAlertProps> = (props: PowerAlertProps) => {

    return (<div
        className={`p-4 rounded-lg border ${getClasses(props.type)}`}
        role="alert"
    >
        <div className="flex items-center">
            <h3 className="text-lg font-medium">
                {props.title}
            </h3>
        </div>
        <div className="mt-2 text-sm">
            {props.description}
        </div>
        {props.suffix
            ? <div className="mt-2">
                {props.suffix}
            </div>
            : null}
    </div>);
};
