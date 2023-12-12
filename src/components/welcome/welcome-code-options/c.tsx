/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description C
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps } from "../welcome-code-option";

export const WelcomeCodeC: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"#include <stdio.h>"}
            <br />
            {"#include <sudotv-the-main.h>"}
            <br />
            <br />
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            {"int main() {"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`printf("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
            </CodeAlertButton>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"return 0;"}
            <br />
            {"}"}
            <br />
            <br />
            <CodeLink
                href="/series"
            >
                {`// ${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT)}`}
                <br />
                {"void sudoTVSeries() {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`openView("${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES)}");`}
                <br />
                {"}"}
            </CodeLink>
        </code>
    );
};
