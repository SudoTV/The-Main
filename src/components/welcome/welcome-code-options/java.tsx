/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Java
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";

export const WelcomeCodeJava: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"package tv.sudo.the-main;"}
            <br />
            <br />
            {"import static tv.sudo.view-manager.ViewManager;"}
            <br />
            <br />
            {"public class SudoTV {"}
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"public static void main(String[] args) {"}
            <br />
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`System.out.println("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
            </CodeAlertButton>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
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
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`// ${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT)}`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`public ${redirect.functionName}() {`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`ViewManager.open("${redirect.humanFriendlyName}");`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"}"}
                    </CodeLink>
                );
            })}
            <br />
            {"}"}
        </code>
    );
};
