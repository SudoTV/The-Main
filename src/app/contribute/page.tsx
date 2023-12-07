/**
 * @author WMXPY
 * @namespace Contribute
 * @description Page
 */

import { RedirectionCard } from "../../components/common/redirection-card";
import { createTheMainDictionaryRepositoryConfig } from "../../components/contribute/repositories";
import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import { contributeInternationalization } from "../../dictionary/contribute/_intl";
import { CONTRIBUTE_PROFILE } from "../../dictionary/contribute/_profile";
import EnglishUnitedStates from "../../dictionary/contribute/before-start/en-US.mdx";
import ChineseSimplified from "../../dictionary/contribute/before-start/zh-CN.mdx";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";
import { SIZE } from "../../util/size";


type Props = {
};

export default async function Page(_props: Props) {

    const locale = useLocale();
    const format = contributeInternationalization.format(locale);

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: format.get(CONTRIBUTE_PROFILE.CONTRIBUTE),
                href: HrefConfig.withinSite(locale, "contribute"),
            },
        ]}
        contributeAnnotation={createTheMainDictionaryRepositoryConfig(
            "contribute",
            "before-start",
            `${locale}.mdx`,
        )}
    >
        <article
            className="w-full"
        >
            <h2
                className="text-3xl font-bold"
            >
                {format.get(CONTRIBUTE_PROFILE.CONTRIBUTE)}
            </h2>
            <p
                className="my-2 text-gray-900 dark:text-gray-400"
            >
                {format.get(CONTRIBUTE_PROFILE.CONTRIBUTE_INDEX_DESCRIPTION)}
            </p>
            <MDXLocaleSwitcher
                en-US={EnglishUnitedStates}
                zh-CN={ChineseSimplified}
            />
            <section
                className="flex flex-col gap-4 my-4"
            >
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(CONTRIBUTE_PROFILE.PROJECT_IN_SERIES)}
                    titleHref={HrefConfig.withinSite(locale, "contribute", "projects")}
                    subtitle={format.get(CONTRIBUTE_PROFILE.PROJECT_IN_SERIES_DESCRIPTION)}
                />
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(CONTRIBUTE_PROFILE.SERIES_CONTENT_AND_METADATA)}
                    titleHref={HrefConfig.withinSite(locale, "contribute", "series")}
                    subtitle={format.get(CONTRIBUTE_PROFILE.SERIES_CONTENT_AND_METADATA_DESCRIPTION)}
                />
                <RedirectionCard
                    full
                    size={SIZE.SMALL}
                    title={format.get(CONTRIBUTE_PROFILE.SUDOTV_WEBSITE)}
                    titleHref={HrefConfig.withinSite(locale, "contribute", "sites")}
                    subtitle={format.get(CONTRIBUTE_PROFILE.SUDOTV_WEBSITE_DESCRIPTION)}
                />
            </section>
            <p
                className="my-2 text-gray-900 dark:text-gray-400"
            >
                {format.get(CONTRIBUTE_PROFILE.CONTRIBUTE_INDEX_EXTRA)}
            </p>
        </article>
    </MainPageWrapper>);
};
