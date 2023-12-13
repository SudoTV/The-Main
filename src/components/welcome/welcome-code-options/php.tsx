/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Php
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";

export const WelcomeCodePhp: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"<?php"}
            <br />
            <br />
            {'require "sudotv-the-main.php";'}
            <br />
            <br />
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`echo "${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}";`}
            </CodeAlertButton>
            <br />
            <br />
            {props.redirects.map((
                redirect: WelcomeCodeOptionRedirect,
            ) => {
                return (
                    <CodeLink
                        key={redirect.functionName}
                        href={redirect.href}
                    >
                        {`// ${redirect.description}`}
                        <br />
                        {`function ${redirect.functionName}() {`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`ViewManager.open("${redirect.humanFriendlyName}");`}
                        <br />
                        {"}"}
                    </CodeLink>
                );
            })}
            <br />
            <br />
            {"?>"}
        </code>
    );
};
