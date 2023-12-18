/**
* @author WMXPY
* @namespace Components_Welcome_Options
* @description Rust
*/

import { welcomeCodeInternationalization } from "@/dictionary/welcome-code/_intl";
import { WELCOME_CODE_PROFILE } from "@/dictionary/welcome-code/_profile";
import { useLocale } from "@/i18n/use-locale";
import * as React from "react";
import { CodeAlertButton } from "../code-alert-button";
import { CodeLink } from "../code-link";
import { WelcomeCodeOptionProps, WelcomeCodeOptionRedirect } from "../welcome-code-option";
import { WelcomeCodeWrapper } from "../welcome-code-wrapper";

export const WelcomeCodeRust: React.FC<WelcomeCodeOptionProps> = (
    props: WelcomeCodeOptionProps,
) => {

    const locale = useLocale();
    const format = welcomeCodeInternationalization.format(locale);

    return (
        <WelcomeCodeWrapper
            language="Rust"
            locale={locale}
        >
            {"use sudotv-the-main::openView;\n\n"}
            {`// ${format.get(WELCOME_CODE_PROFILE.WELCOME_TEXT)}\n`}
            {"fn main() {\n"}
            <CodeAlertButton
                message={format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}
            >
                {`    println!("${format.get(WELCOME_CODE_PROFILE.HELLO_WORLD_TEXT)}");`}
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
                        {`fn ${redirect.functionName}() {`}
                        <br />
                        {`    openView("${redirect.humanFriendlyName}");`}
                        <br />
                        {"}"}
                    </CodeLink>
                );
            })}
        </WelcomeCodeWrapper>
    );
};
