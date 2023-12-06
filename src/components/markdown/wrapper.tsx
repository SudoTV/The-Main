/**
 * @author WMXPY
 * @namespace Component_Markdown
 * @description Wrapper
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { ALERT_TYPE } from "../alert/definition";
import { PowerAlert } from "../alert/power-alert";
import { Section } from "../typography/section";
import { contentInternationalization } from "../../dictionary/content/_intl";
import { crossLocaleInternationalization } from "../../dictionary/cross-locale/_intl";
import { CONTENT_PROFILE } from "../../dictionary/content/_profile";

export type MarkdownWrapperProps = {

    readonly locale: IETF_LOCALE;
    readonly contentLocale: IETF_LOCALE | undefined;

    readonly children: React.ReactNode;
};

export const MarkdownWrapper: React.FC<MarkdownWrapperProps> = (props: MarkdownWrapperProps) => {

    const contentFormat = contentInternationalization.format(props.locale);
    const crossLocaleFormat = crossLocaleInternationalization.format(props.locale);

    if (typeof props.contentLocale === "undefined"
        || props.contentLocale === props.locale) {

        return (<main
            className="text-left rtl:text-right"
        >
            {props.children}
        </main>);
    }

    return (<main
        className="text-left rtl:text-right"
    >
        <Section
            marginBottom
        >
            <PowerAlert
                title={contentFormat.get(
                    CONTENT_PROFILE.DISPLAYING_WITH_LOCALE_1,
                    crossLocaleFormat.get(props.contentLocale),
                )}
                description={contentFormat.get(
                    CONTENT_PROFILE.CONTENT_NOT_AVAILABLE_FOR_LANGUAGE_2,
                    crossLocaleFormat.get(props.locale),
                    crossLocaleFormat.get(props.contentLocale),
                )}
                type={ALERT_TYPE.WARNING}
            />
        </Section>
        {props.children}
    </main>);
};
