/**
 * @author WMXPY
 * @namespace Contact
 * @description Page
 */

import { createTheMainDictionaryRepositoryConfig } from "../../components/contribute/repositories";
import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import EnglishUnitedStates from "../../dictionary/contact/contact/en-US.mdx";
import ChineseSimplified from "../../dictionary/contact/contact/zh-CN.mdx";
import { metadataInternationalization } from "../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../dictionary/metadata/_profile";
import { useLocale } from "../../i18n/use-locale";
import { HrefConfig } from "../../util/href";

type Props = {
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const format = metadataInternationalization.format(locale);

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: format.get(METADATA_PROFILE.CONTACT_TITLE),
                href: HrefConfig.withinSite(locale, "contact"),
            },
        ]}
        contributeAnnotation={createTheMainDictionaryRepositoryConfig(
            "contact",
            "contact",
            `${locale}.mdx`,
        )}
    >
        <MDXLocaleSwitcher
            zh-CN={ChineseSimplified}
            en-US={EnglishUnitedStates}
        />
    </MainPageWrapper>);
};
