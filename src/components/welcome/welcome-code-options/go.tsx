/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Go
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";
import { WelcomeCodeWrapper } from "../welcome-code-wrapper";

export const WelcomeCodeGo: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <WelcomeCodeWrapper
            language="Go"
            locale={locale}
        >
            {"package sudotv-the-main\n\n"}
            {'import "sudotv/view-manager"\n'}
            {'import "fmt"\n\n'}
            {"func main() {\n"}
            {`    // ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}\n`}
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`    fmt.Println("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}")`}
            </CodeAlertButton>
            {"\n}\n\n"}
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
                        {`func ${redirect.functionName}() {`}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`ViewManager.open("${redirect.humanFriendlyName}")`}
                        <br />
                        {"}"}
                    </CodeLink>
                );
            })}
        </WelcomeCodeWrapper>
    );
};
