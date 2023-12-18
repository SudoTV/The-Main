/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { HrefConfig } from "@/util/href";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { WelcomeCodeOptionProps } from "./welcome-code-option";
import { WelcomeCodeC } from "./welcome-code-options/c";
import { WelcomeCodeCpp } from "./welcome-code-options/cpp";
import { WelcomeCodeGo } from "./welcome-code-options/go";
import { WelcomeCodeJava } from "./welcome-code-options/java";
import { WelcomeCodeJavaScript } from "./welcome-code-options/javascript";
import { WelcomeCodeKotlin } from "./welcome-code-options/kotlin";
import { WelcomeCodePhp } from "./welcome-code-options/php";
import { WelcomeCodePython } from "./welcome-code-options/python";
import { WelcomeCodeR } from "./welcome-code-options/r";
import { WelcomeCodeRust } from "./welcome-code-options/rust";
import { WelcomeCodeTypeScript } from "./welcome-code-options/typescript";

const codeOptions: Array<React.FC<WelcomeCodeOptionProps>> = [

    WelcomeCodeC,
    WelcomeCodeCpp,
    WelcomeCodeGo,
    WelcomeCodeJava,
    WelcomeCodeJavaScript,
    WelcomeCodeKotlin,
    WelcomeCodePhp,
    WelcomeCodePython,
    WelcomeCodeR,
    WelcomeCodeRust,
    WelcomeCodeTypeScript,
];

export type WelcomeCodeProps = {

    readonly locale: IETF_LOCALE;
};

export const WelcomeCode: React.FC<WelcomeCodeProps> = (
    props: WelcomeCodeProps,
) => {

    const format =
        welcomeCodeInternationalization.format(props.locale);

    const RandomComponent: React.FC<WelcomeCodeOptionProps> =
        codeOptions[Math.floor(Math.random() * codeOptions.length)];

    return (<RandomComponent
        redirects={[
            {
                href: HrefConfig.withinSite(props.locale, "series"),
                functionName: "sudoTVSeries",
                humanFriendlyName: format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES),
                description: format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT),
            },
        ]}
        quickLinks={[]}
    />);
};
