/**
 * @author WMXPY
 * @description Layout
 */

import { IETF_LOCALE } from "@sudoo/locale";
import type { Metadata } from "next";
import { LayoutFooter } from "../components/footer/footer";
import { LayoutHeader } from "../components/header/header";
import { metadataInternationalization } from "../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../dictionary/metadata/_profile";
import { useLocale } from "../i18n/use-locale";
import "../styles/globals.css";

export const runtime = "edge";

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
        <body className="flex flex-col h-screen justify-between">
            <LayoutHeader
                locale={locale}
            />
            <section className="mb-auto">
                {props.children}
            </section>
            <LayoutFooter
                locale={locale}
            />
            <script
                defer
                src='https://static.cloudflareinsights.com/beacon.min.js'
                data-cf-beacon='{"token": "08dd09da202e470fb7f75d6d170e2d37"}'
            >
            </script>
        </body>
    </html>);
}
