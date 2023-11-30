/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description JavaScript
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";

export const WelcomeCodeJavaScript: React.FC = () => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {'"use strict";'}
            <br />
            <br />
            {'import { ViewManager } from "@sudotv/the-main";'}
            <br />
            <br />
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`console.log("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
            </CodeAlertButton>
            <br />
            <br />
            <CodeLink
                href="/series"
            >
                {`// ${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES_VISIT_TEXT)}`}
                <br />
                {"const sudoTVSeries = () => {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`ViewManager.open("${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES)}");`}
                <br />
                {"}"}
            </CodeLink>
        </code>
    );
};
