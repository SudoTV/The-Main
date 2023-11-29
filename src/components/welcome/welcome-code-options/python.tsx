/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Python
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";

export const WelcomeCodePython: React.FC = () => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"from sudotv-the-main import ViewManager"}
            <br />
            <br />
            {`# ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`print("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}")`}
            </CodeAlertButton>
            <br />
            <br />
            <CodeLink
                href="/series"
            >
                {"def sudoTVSeries():"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{'ViewManager.open("SudoTV Series")'}
            </CodeLink>
        </code>
    );
};
