/**
* @author WMXPY
* @namespace Components_Typography
* @description Main Page Wrapper
*/

import * as React from "react";

export type MainPageWrapperProps = {

    readonly children?: any;
};

export const MainPageWrapper: React.FC<MainPageWrapperProps> = (props: MainPageWrapperProps) => {

    return (
        <main
            className="flex flex-col items-start justify-between p-6 mx-auto w-full max-w-screen-xl"
        >
            {props.children}
        </main>
    );
};
