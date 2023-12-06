/**
 * @author WMXPY
 * @namespace Component_Mdx
 * @description Locale Switcher
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { MDXProps } from "mdx/types";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { useLocale } from "../../i18n/use-locale";
import { markdownComponentsMap } from "../markdown/component-map";

export type MDXLocaleSwitcherProps = {

    readonly parameters?: Record<string, any>;

    readonly defaultLocale?: IETF_LOCALE;
} & Partial<Record<IETF_LOCALE, React.FC<MDXProps>>>;

export const MDXLocaleSwitcher: React.FC<MDXLocaleSwitcherProps> = (props: MDXLocaleSwitcherProps) => {

    const locale = useLocale();
    const Component: React.FC<MDXProps> | undefined =
        props[locale];

    if (!Component) {

        const defaultLocale: IETF_LOCALE =
            props.defaultLocale ?? DEFAULT_LOCALE;

        const DefaultComponent: React.FC<MDXProps> | undefined =
            props[defaultLocale];

        if (DefaultComponent) {
            return (<DefaultComponent
                components={markdownComponentsMap}
                parameters={props.parameters}
            />);
        }

        return (<div>
            {`Locale ${locale} not found`}
        </div>);
    }

    return (<Component
        components={markdownComponentsMap}
        parameters={props.parameters}
    />);
};
