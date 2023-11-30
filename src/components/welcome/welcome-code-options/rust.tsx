/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Rust
*/

import * as React from "react";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";

export const WelcomeCodeRust: React.FC = () => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"use sudotv-the-main::openView;"}
            <br />
            <br />
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}`}
            <br />
            {"fn main() {"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`println!("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)})";`}
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
                {"fn sudoTVSeries() {"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`openView("${format.get(WELCOME_CODE_PROFILE.SUDOTV_SERIES)}");`}
                <br />
                {"}"}
            </CodeLink>
        </code>
    );
};
