/**
 * @author WMXPY
 * @description Layout
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

    return (<html lang="en">
        <body className={inter.className}>
            {props.children}
        </body>
    </html>);
}
