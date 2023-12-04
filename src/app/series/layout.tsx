/**
 * @author WMXPY
 * @namespace Series
 * @description Layout
 */

import { IETF_LOCALE } from "@sudoo/locale";
import type { Metadata } from "next";
import { Fragment } from "react";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { metadataInternationalization } from "../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../dictionary/metadata/_profile";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";

export async function generateMetadata(): Promise<Metadata> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale: IETF_LOCALE = useLocale();
    const profile = metadataInternationalization.format(locale);

    return {
        title: profile.get(METADATA_PROFILE.SERIES_TITLE),
        description: profile.get(METADATA_PROFILE.SERIES_DESCRIPTION),
    };
};

export default function Layout(props: {
    children: React.ReactNode,
}) {

    return props.children;
}
