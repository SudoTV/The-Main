/**
 * @author WMXPY
 * @namespace Essential
 * @description Not Found
 */

import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { metadataInternationalization } from "@/dictionary/metadata/_intl";
import { METADATA_PROFILE } from "@/dictionary/metadata/_profile";
import { useLocale } from "@/i18n/use-locale";

export default function NotFound() {

    const locale = useLocale();
    const metadataFormat = metadataInternationalization.format(locale);

    return (<MainPageWrapper
        locale={locale}
    >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                    404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    {metadataFormat.get(METADATA_PROFILE.NOT_FOUND_TITLE)}
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                    {metadataFormat.get(METADATA_PROFILE.NOT_FOUND_DESCRIPTION)}
                </p>
            </div>
        </div>
    </MainPageWrapper>);
};
