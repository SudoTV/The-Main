/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier
 * @description Page
 */

import { redirect } from "next/navigation";
import { useLocale } from "@/i18n/use-locale";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();

    redirect(`/${locale}/series/${props.params["series-name"]}/episodes`);

    return "Redirecting";
};
