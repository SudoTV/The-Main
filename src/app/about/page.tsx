/**
 * @author WMXPY
 * @namespace About
 * @description Page
 */

import { createTheMainDictionaryRepositoryConfig } from "@/components/contribute/repositories";
import { MDXLocaleSwitcher } from "@/components/mdx/locale-switcher";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import EnglishUnitedStates from "@/dictionary/about/about/en-US.mdx";
import ChineseSimplified from "@/dictionary/about/about/zh-CN.mdx";
import { metadataInternationalization } from "@/dictionary/metadata/_intl";
import { METADATA_PROFILE } from "@/dictionary/metadata/_profile";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";

type Props = {
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const format = metadataInternationalization.format(locale);

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: format.get(METADATA_PROFILE.ABOUT_TITLE),
                href: HrefConfig.withinSite(locale, "about"),
            },
        ]}
        contributeAnnotation={createTheMainDictionaryRepositoryConfig(
            "about",
            "about",
            `${locale}.mdx`,
        )}
    >
        <MDXLocaleSwitcher
            zh-CN={ChineseSimplified}
            en-US={EnglishUnitedStates}
        />
    </MainPageWrapper>);
};
