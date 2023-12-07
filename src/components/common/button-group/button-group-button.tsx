/**
 * @author WMXPY
 * @namespace Components_Common_ButtonGroup
 * @description Button Group Button
 */

import * as React from "react";

export type ButtonGroupButtonProps = {

    readonly activated?: boolean;
    readonly onClick?: () => void;

    readonly children?: React.ReactNode;
};

export const ButtonGroupButton: React.FC<ButtonGroupButtonProps> = (props: ButtonGroupButtonProps) => {

    let buttonClasses: string = "px-2 py-2 text-gray-900 first:border last:border border-t border-b border-gray-300 first:rounded-s-lg last:rounded-e-lg focus:z-10 focus:ring-2 dark:border-gray-700";

    buttonClasses += " ";
    if (props.activated) {
        buttonClasses += "dark:bg-white dark:text-black bg-black text-white";
    } else {
        buttonClasses += "focus:ring-gray-500 focus:text-white dark:text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
    }

    return (
        <button
            type="button"
            onClick={props.onClick}
            className={buttonClasses}
        >
            {props.children}
        </button>
    );
};
