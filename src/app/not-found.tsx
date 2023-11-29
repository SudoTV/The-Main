/**
 * @author WMXPY
 * @description Not Found
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { useLocale } from "../i18n/use-locale";

export default function NotFound() {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    const locale: IETF_LOCALE = useLocale();

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>NOT FOUND</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>{locale}</p>
    </main>);
};
