/**
 * @author WMXPY
 * @namespace Reprint_Videos
 * @description Page
 */

import { createTheMainDictionaryRepositoryConfig } from "@/components/contribute/repositories";
import { MDXLocaleSwitcher } from "@/components/mdx/locale-switcher";
import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { reprintInternationalization } from "@/dictionary/reprint/_intl";
import { REPRINT_PROFILE } from "@/dictionary/reprint/_profile";
import EnglishUnitedStates from "@/dictionary/reprint/videos/en-US.mdx";
import ChineseSimplified from "@/dictionary/reprint/videos/zh-CN.mdx";
import { useLocale } from "@/i18n/use-locale";
import { HrefConfig } from "@/util/href";

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
            {
                name: format.get(REPRINT_PROFILE.SERIES_VIDEOS),
                href: HrefConfig.withinSite(locale, "reprint", "videos"),
            },
        ]}
        contributeAnnotation={createTheMainDictionaryRepositoryConfig(
            "reprint",
            "videos",
            `${locale}.mdx`,
        )}
    >
        <MDXLocaleSwitcher
            zh-CN={ChineseSimplified}
            en-US={EnglishUnitedStates}
        />
    </MainPageWrapper>);
};
