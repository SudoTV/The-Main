/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code
*/

import * as React from "react";
import { WelcomeCodeC } from "./welcome-code-options/c";
import { WelcomeCodeCpp } from "./welcome-code-options/cpp";
import { WelcomeCodeJava } from "./welcome-code-options/java";
import { WelcomeCodeJavaScript } from "./welcome-code-options/javascript";
import { WelcomeCodeKotlin } from "./welcome-code-options/kotlin";
import { WelcomeCodePhp } from "./welcome-code-options/php";
import { WelcomeCodePython } from "./welcome-code-options/python";
import { WelcomeCodeR } from "./welcome-code-options/r";
import { WelcomeCodeRust } from "./welcome-code-options/rust";

const codeOptions: React.FC[] = [

    WelcomeCodeC,
    WelcomeCodeCpp,
    WelcomeCodeJava,
    WelcomeCodeJavaScript,
    WelcomeCodeKotlin,
    WelcomeCodePhp,
    WelcomeCodePython,
    WelcomeCodeR,
    WelcomeCodeRust,
];

export const WelcomeCode: React.FC = () => {

    const RandomComponent: React.FC = codeOptions[Math.floor(Math.random() * codeOptions.length)];

    return (
        <pre
            className="whitespace-pre-wrap"
        >
            <RandomComponent />
        </pre>
    );
};
