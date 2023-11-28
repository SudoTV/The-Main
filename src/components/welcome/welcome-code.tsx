/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code
*/

import * as React from "react";
import { WelcomeCodeJava } from "./welcome-code-options/java";

const codeOptions: React.FC[] = [

    WelcomeCodeJava,
];

export const WelcomeCode: React.FC = () => {

    const RandomComponent: React.FC = codeOptions[Math.floor(Math.random() * codeOptions.length)];

    return (<RandomComponent />);
};
