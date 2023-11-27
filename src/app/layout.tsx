/**
 * @author WMXPY
 * @description Layout
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "../styles/globals.css";

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
}) {

    const headersList = headers();

    const domain = headersList.get("host") || "";
    const fullUrl = headersList.get("referer") || "";
    const [, pathname] = fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

    console.log(pathname);
    return (<html lang="en">
        <body className={inter.className}>
            {props.children}
        </body>
    </html>);
}
