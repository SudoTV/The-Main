/**
 * @author WMXPY
 * @description Layout
 */

import "@/styles/globals.css";
import { IETF_LOCALE } from "@sudoo/locale";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { LayoutFooter } from "@/components/footer/footer";
import { LayoutHeader } from "@/components/header/header";
import { metadataInternationalization } from "../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../dictionary/metadata/_profile";
import { useLocale } from "../i18n/use-locale";
import { generateAlternates } from "../util/metadata/generate-alternates";
import { generateMetadataBase } from "../util/metadata/generate-metadata-base";

export const viewport: Viewport = {

    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,

    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "white",
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "black",
        },
    ],
};

export async function generateMetadata(): Promise<Metadata> {

    const metadataBase = generateMetadataBase();
    const alternates = generateAlternates();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale: IETF_LOCALE = useLocale();
    const profile = metadataInternationalization.format(locale);

    return {
        metadataBase,
        alternates,
        title: profile.get(METADATA_PROFILE.INDEX_TITLE),
        description: profile.get(METADATA_PROFILE.INDEX_DESCRIPTION),
    };
};

export default function RootLayout(props: {
    children: React.ReactNode,
}) {

    const locale: IETF_LOCALE = useLocale();

    return (<html lang={locale}>
        <body className="flex flex-col min-h-screen justify-between">
            <LayoutHeader
                locale={locale}
            />
            <section className="mb-auto">
                {props.children}
            </section>
            <LayoutFooter
                locale={locale}
            />
            <Analytics />
            <SpeedInsights />
        </body>
    </html>);
}
