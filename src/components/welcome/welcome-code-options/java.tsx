/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Java
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";

export const WelcomeCodeJava: React.FC = () => {

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
            <CodeLink
                href="/series"
            >
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`// ${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT)}`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {"public sudoTVSeries() {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`ViewManager.open("${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES)}");`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {"}"}
            </CodeLink>
            <br />
            {"}"}
        </code>
    );
};
