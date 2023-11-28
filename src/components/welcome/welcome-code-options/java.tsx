/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Java
*/

import * as React from "react";
import { useLocale } from "../../../i18n/use-locale";
import { welcomeCodeInternationalization } from "../../../dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "../../../dictionary/welcome-code/_profile";

export const WelcomeCodeJava: React.FC = () => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <code>
            {"public class SudoTV {"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String[] args) {"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`System.out.println("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
            <br />
            {"}"}
        </code>
    );
};
