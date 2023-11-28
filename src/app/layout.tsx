/**
 * @author WMXPY
 * @description Layout
 */

import { IETF_LOCALE } from "@sudoo/locale";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutFooter } from "../components/footer/footer";
import { metadataInternationalization } from "../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../dictionary/metadata/_profile";
import { useLocale } from "../i18n/use-locale";
import "../styles/code.css";
import "../styles/globals.css";
import { LayoutHeader } from "../components/header/header";

const inter = Inter({
    subsets: [
        "latin",
    ],
});

export async function generateMetadata(): Promise<Metadata> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale: IETF_LOCALE = useLocale();
    const profile = metadataInternationalization.format(locale);

    return {
        title: profile.get(METADATA_PROFILE.INDEX_TITLE),
        description: profile.get(METADATA_PROFILE.INDEX_DESCRIPTION),
    };
};

export default function RootLayout(props: {
    children: React.ReactNode,
}) {

    const locale: IETF_LOCALE = useLocale();

    return (<html lang={locale}>
        <body className={inter.className}>
            <LayoutHeader />
            {props.children}
            <LayoutFooter />
        </body>
    </html>);
}
