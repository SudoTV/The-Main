/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code
*/

import * as React from "react";
import { WelcomeCodeJava } from "./welcome-code-options/java";
import { WelcomeCodeJavaScript } from "./welcome-code-options/javascript";
import { WelcomeCodePython } from "./welcome-code-options/python";
import { WelcomeCodeR } from "./welcome-code-options/r";

const codeOptions: React.FC[] = [

    WelcomeCodeJava,
    WelcomeCodeJavaScript,
    WelcomeCodePython,
    WelcomeCodeR,
];

export const WelcomeCode: React.FC = () => {

    const RandomComponent: React.FC = codeOptions[Math.floor(Math.random() * codeOptions.length)];

    return (<RandomComponent />);
};
