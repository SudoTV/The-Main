/**
 * @author WMXPY
 * @namespace Series
 * @description Page
 */

import { SeriesCard } from "../../components/series/series-card";
import { requestSeriesList } from "../../data/request/series-list";
import { useLocale } from "../../i18n/use-locale";

type Props = {
};

export default async function Page(props: Props) {

    const locale = useLocale();

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    console.log(await requestSeriesList());

    return (<main
        className="flex flex-col items-center justify-between p-6 mx-auto w-full max-w-screen-xl"
    >
        <SeriesCard />
    </main>);
};
