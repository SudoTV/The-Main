/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode
 * @description Page
 */

import { useLocale } from "@/i18n/use-locale";
import { redirect } from "next/navigation";

type Props = {

    readonly params: {
        readonly "series-name": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();

    redirect(`/${locale}/series/${props.params["series-name"]}/episodes`);
};
