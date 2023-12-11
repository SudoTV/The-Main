/**
 * @author WMXPY
 * @namespace Reprint
 * @description Page
 */

import { RedirectionCard } from "@/components/common/redirection-card";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { reprintInternationalization } from "@/dictionary/reprint/_intl";
import { REPRINT_PROFILE } from "@/dictionary/reprint/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";

type Props = {
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const format = reprintInternationalization.format(locale);

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: format.get(REPRINT_PROFILE.REPRINT),
                href: HrefConfig.withinSite(locale, "reprint"),
            },
        ]}
    >
        <article
            className="w-full"
        >
            <h2
                className="text-3xl font-bold"
            >
                {format.get(REPRINT_PROFILE.REPRINT)}
            </h2>
            <p
                className="my-2 text-gray-900 dark:text-gray-400"
            >
                {format.get(REPRINT_PROFILE.REPRINT_INDEX_DESCRIPTION)}
            </p>
            <section
                className="flex flex-col gap-4 my-4"
            >
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(REPRINT_PROFILE.SERIES_CODE_AND_CONTENT)}
                    titleHref={HrefConfig.withinSite(locale, "reprint", "series")}
                    subtitle={format.get(REPRINT_PROFILE.SERIES_CODE_AND_CONTENT_DESCRIPTION)}
                />
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(REPRINT_PROFILE.SITE_CONTENT_AND_SOURCE_CODE)}
                    titleHref={HrefConfig.withinSite(locale, "reprint", "sites")}
                    subtitle={format.get(REPRINT_PROFILE.SITE_CONTENT_AND_SOURCE_CODE_DESCRIPTION)}
                />
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(REPRINT_PROFILE.SERIES_VIDEOS)}
                    titleHref={HrefConfig.withinSite(locale, "reprint", "videos")}
                    subtitle={format.get(REPRINT_PROFILE.SERIES_VIDEOS_DESCRIPTION)}
                />
            </section>
            <p
                className="my-2 text-gray-900 dark:text-gray-400"
            >
                {format.get(REPRINT_PROFILE.REPRINT_INDEX_EXTRA)}
            </p>
        </article>
    </MainPageWrapper>);
};
