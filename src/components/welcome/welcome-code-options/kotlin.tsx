/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Kotlin
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";
import { WelcomeCodeWrapper } from "../welcome-code-wrapper";

export const WelcomeCodeKotlin: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <WelcomeCodeWrapper
            language="Kotlin"
            locale={locale}
        >
            {"package tv.sudo.the-main"}
            <br />
            <br />
            {"import tv.sudo.view-manager.ViewManager"}
            <br />
            <br />
            {"fun main(args: Array<String>) {"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`println("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
            </CodeAlertButton>
            <br />
            {"}"}
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
                        {`fun ${redirect.functionName}() {`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`ViewManager.open("${redirect.humanFriendlyName}");`}
                        <br />
                        {"}"}
                    </CodeLink>
                );
            })}
        </WelcomeCodeWrapper>
    );
};
