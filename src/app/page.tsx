/**
 * @author WMXPY
 * @description Page
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { WelcomeCode } from "../components/welcome/welcome-code";
import { useLocale } from "../i18n/use-locale";

export default async function Home(props: any) {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    const locale: IETF_LOCALE = useLocale();

    return (<main
        className="flex flex-col items-center justify-between p-24"
    >
        <WelcomeCode />
    </main>);
};
