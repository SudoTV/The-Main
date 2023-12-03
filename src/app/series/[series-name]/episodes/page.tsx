/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episodes
 * @description Page
 */

import { LocaleSwitcher } from "../../../../components/preference/language-switcher";
import { getGithubFile } from "../../../../data/github/get-file";
import { useLocale } from "../../../../i18n/use-locale";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    await getGithubFile("SudoTV", "SudoTV-Series-DB", "main", ["docs", "README.md"]);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>Static page</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>{props.params["series-name"]}</p>
        <p>Episode</p>
        <p>{locale}</p>
        <LocaleSwitcher />
    </main>);
};
