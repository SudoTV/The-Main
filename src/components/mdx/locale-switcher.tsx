/**
 * @author WMXPY
 * @namespace Component_Mdx
 * @description Locale Switcher
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { MDXProps } from "mdx/types";
import { useLocale } from "../../i18n/use-locale";
import { markdownComponentsMap } from "../markdown/component-map";

export type MDXLocaleSwitcherProps = {
} & Partial<Record<IETF_LOCALE, React.FC<MDXProps>>>;

export const MDXLocaleSwitcher: React.FC<MDXLocaleSwitcherProps> = (props: MDXLocaleSwitcherProps) => {

    const locale = useLocale();
    const Component: React.FC<MDXProps> | undefined = props[locale];

    if (!Component) {
        return (<div>
            {`Locale ${locale} not found`}
        </div>);
    }

    return (<Component
        components={markdownComponentsMap}
    />);
};
