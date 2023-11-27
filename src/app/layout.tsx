/**
 * @author WMXPY
 * @description Layout
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { LOCALE } from "@sudoo/locale";
import { i18n } from "../i18n/config";

const inter = Inter({
    subsets: [
        "latin",
    ],
});

export const metadata: Metadata = {
    title: "SudoTV the Main",
    description: "SudoTV the Main",
};

export default function RootLayout(props: {
    children: React.ReactNode,
    params: any,
}) {

    console.log(props);
    return (<html lang="en">
        <body className={inter.className}>
            {props.children}
        </body>
    </html>);
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
