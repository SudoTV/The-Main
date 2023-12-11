/**
 * @author WMXPY
 * @namespace Essential
 * @description Layout
 */

import { LayoutFooter } from "@/components/footer/footer";
import { LayoutHeader } from "@/components/header/header";
import { useLocale } from "@/i18n/use-locale";
import "@/styles/globals.css";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";

export default function RootLayout(props: {
    children: React.ReactNode,
}) {

    const locale: IETF_LOCALE = useLocale();

    return (<React.Fragment>
        <LayoutHeader
            locale={locale}
        />
        <section className="mb-auto">
            {props.children}
        </section>
        <LayoutFooter
            locale={locale}
        />
    </React.Fragment>);
}
