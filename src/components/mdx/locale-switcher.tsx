/**
 * @author WMXPY
 * @namespace Component_Mdx
 * @description Locale Switcher
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { MDXProps } from "mdx/types";
import { contentInternationalization } from "../../dictionary/content/_intl";
import { CONTENT_PROFILE } from "../../dictionary/content/_profile";
import { crossLocaleInternationalization } from "../../dictionary/cross-locale/_intl";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { useLocale } from "../../i18n/use-locale";
import { ALERT_TYPE } from "../alert/definition";
import { PowerAlert } from "../alert/power-alert";
import { markdownComponentsMap } from "../markdown/component-map";
import { Section } from "../typography/section";

export type MDXLocaleSwitcherProps = {

    readonly parameters?: Record<string, any>;

    readonly defaultLocale?: IETF_LOCALE;
} & Partial<Record<IETF_LOCALE, React.FC<MDXProps>>>;

export const MDXLocaleSwitcher: React.FC<MDXLocaleSwitcherProps> = (props: MDXLocaleSwitcherProps) => {

    const locale = useLocale();
    const Component: React.FC<MDXProps> | undefined =
        props[locale];

    const contentFormat = contentInternationalization.format(locale);
    const crossLocaleFormat = crossLocaleInternationalization.format(locale);

    if (!Component) {

        const defaultLocale: IETF_LOCALE =
            props.defaultLocale ?? DEFAULT_LOCALE;

        const DefaultComponent: React.FC<MDXProps> | undefined =
            props[defaultLocale];

        if (DefaultComponent) {
            return (<main
                className="text-left rtl:text-right"
            >
                <Section
                    marginBottom
                >
                    <PowerAlert
                        title={contentFormat.get(
                            CONTENT_PROFILE.DISPLAYING_WITH_LOCALE_1,
                            crossLocaleFormat.get(defaultLocale),
                        )}
                        description={contentFormat.get(
                            CONTENT_PROFILE.CONTENT_NOT_AVAILABLE_FOR_LANGUAGE_2,
                            crossLocaleFormat.get(locale),
                            crossLocaleFormat.get(defaultLocale),
                        )}
                        type={ALERT_TYPE.WARNING}
                    />
                </Section>
                <DefaultComponent
                    components={markdownComponentsMap}
                    parameters={props.parameters}
                />
            </main>);
        }

        return (<div>
            {`Locale ${locale} not found`}
        </div>);
    }

    return (<main
        className="text-left rtl:text-right"
    >
        <Component
            components={markdownComponentsMap}
            parameters={props.parameters}
        />
    </main>);
};
