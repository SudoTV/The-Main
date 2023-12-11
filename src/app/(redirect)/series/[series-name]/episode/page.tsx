/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode
 * @description Page
 */

import { redirect } from "next/navigation";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    redirect(`/series/${props.params["series-name"]}/episodes`);
};
