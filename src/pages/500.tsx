/**
 * @author WMXPY
 * @description 500
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { LayoutFooter } from "../components/footer/footer";
import { LayoutHeader } from "../components/header/header";
import "../styles/globals.css";

export default function Custom500() {

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <LayoutHeader />
        <h1>500 - Server Error</h1>
        <LayoutFooter
            locale={IETF_LOCALE.ENGLISH_UNITED_STATES}
        />
    </main>);
};
