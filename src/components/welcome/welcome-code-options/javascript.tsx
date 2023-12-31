/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description JavaScript
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";
import { WelcomeCodeWrapper } from "../welcome-code-wrapper";

export const WelcomeCodeJavaScript: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <WelcomeCodeWrapper
            language="Javascript"
            locale={locale}
        >
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
                        {`const ${redirect.functionName} = () => {`}
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
