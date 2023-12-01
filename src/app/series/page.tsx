/**
 * @author WMXPY
 * @namespace Series
 * @description Page
 */

import { SeriesCard } from "../../components/series/series-card/series-card";
import { SERIES_TYPE, SeriesEntity } from "../../data/definition/series/series";
import { requestSeriesList } from "../../data/request/series-list";

type Props = {
};

export default async function Page(_props: Props) {

    const series: Array<SeriesEntity<SERIES_TYPE>> = await requestSeriesList();

    return (<main
        className="flex flex-col items-start justify-between p-6 mx-auto w-full max-w-screen-xl"
    >
        <div>
            <h1
                className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white"
            >
                Hello World
            </h1>
            <p
                className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            >
                This is a next.js starter template
            </p>
        </div>
        <div
            className="w-full flex flex-col gap-3"
        >
            {series.map((each: SeriesEntity<SERIES_TYPE>) => {
                return (<SeriesCard
                    key={each.identifier}
                    series={each}
                />);
            })}
        </div>
    </main>);
};
