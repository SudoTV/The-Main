/**
 * @author WMXPY
 * @namespace Components_Common_ButtonGroup
 * @description Button Group
 */

import * as React from "react";

export type ButtonGroupProps = {

    readonly children?: React.ReactNode;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {

    return (
        <div
            className="inline-flex rounded-md w-full justify-start"
            role="group"
        >
            {props.children}
        </div>
    );
};
