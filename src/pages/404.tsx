/**
 * @author WMXPY
 * @description 404
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { LayoutFooter } from "../components/footer/footer";
import { LayoutHeader } from "../components/header/header";
import "../styles/globals.css";

export default function Custom404() {

    return (<html lang={IETF_LOCALE.ENGLISH_UNITED_STATES}>
        <body className="flex flex-col h-screen justify-between w-full">
            <main
                className="flex min-h-screen flex-col items-center justify-between"
            >
                <LayoutHeader />
                <h1>404 - Not Found</h1>
                <LayoutFooter
                    locale={IETF_LOCALE.ENGLISH_UNITED_STATES}
                />
            </main>
        </body>
    </html>);
};
