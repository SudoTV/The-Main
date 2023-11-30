/**
 * @author WMXPY
 * @namespace Component_Mdx
 * @description Locale Switcher
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { MDXProps } from "mdx/types";
import { useLocale } from "../../i18n/use-locale";
import { MDX_A } from "./a";
import { MDX_Blockquote } from "./blockquote";
import { MDX_H1 } from "./h1";
import { MDX_H2 } from "./h2";
import { MDX_H3 } from "./h3";
import { MDX_H4 } from "./h4";
import { MDX_H5 } from "./h5";
import { MDX_H6 } from "./h6";
import { MDX_Li } from "./li";
import { MDX_Ol } from "./ol";
import { MDX_P } from "./p";
import { MDX_Table } from "./table";
import { MDX_Td } from "./td";
import { MDX_Th } from "./th";
import { MDX_Tr } from "./tr";
import { MDX_Ul } from "./ul";
import { MDXWrapper } from "./wrapper";

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

    return (<MDXWrapper>
        <Component
            components={{
                h1: MDX_H1,
                h2: MDX_H2,
                h3: MDX_H3,
                h4: MDX_H4,
                h5: MDX_H5,
                h6: MDX_H6,
                a: MDX_A,
                p: MDX_P,
                table: MDX_Table,
                tr: MDX_Tr,
                th: MDX_Th,
                td: MDX_Td,
                blockquote: MDX_Blockquote,
                ul: MDX_Ul,
                ol: MDX_Ol,
                li: MDX_Li,
            }}
        />
    </MDXWrapper>);
};
