/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Kotlin
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";

export const WelcomeCodeKotlin: React.FC = () => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
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
            <CodeLink
                href="/series"
            >
                {`// ${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT)}`}
                <br />
                {"fun sudoTVSeries() {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`ViewManager.open("${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES)}");`}
                <br />
                {"}"}
            </CodeLink>
        </code>
    );
};
