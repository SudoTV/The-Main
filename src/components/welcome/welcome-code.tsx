/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import * as React from "react";
import { WelcomeCodeOptionProps } from "./welcome-code-option";
import { WelcomeCodeC } from "./welcome-code-options/c";
import { WelcomeCodeCpp } from "./welcome-code-options/cpp";
import { WelcomeCodeJava } from "./welcome-code-options/java";
import { WelcomeCodeJavaScript } from "./welcome-code-options/javascript";
import { WelcomeCodeKotlin } from "./welcome-code-options/kotlin";
import { WelcomeCodePhp } from "./welcome-code-options/php";
import { WelcomeCodePython } from "./welcome-code-options/python";
import { WelcomeCodeR } from "./welcome-code-options/r";
import { WelcomeCodeRust } from "./welcome-code-options/rust";
import { MDX_Pre } from "../mdx/pre";
import { MDX_Code } from "../mdx/code";

const codeOptions: Array<React.FC<WelcomeCodeOptionProps>> = [

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

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    const RandomComponent: React.FC<WelcomeCodeOptionProps> =
        codeOptions[Math.floor(Math.random() * codeOptions.length)];

    return (
        <MDX_Pre>
            <MDX_Code>
                <RandomComponent
                    redirects={[
                        {
                            href: HrefConfig.withinSite(locale, "series"),
                            functionName: "sudoTVSeries",
                            humanFriendlyName: format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES),
                            description: format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT),
                        },
                    ]}
                />
            </MDX_Code>

        </MDX_Pre>
    );
};
