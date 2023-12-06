/**
 * @author WMXPY
 * @namespace Privacy
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import { metadataInternationalization } from "../../dictionary/metadata/_intl";
import { METADATA_PROFILE } from "../../dictionary/metadata/_profile";
import EnglishUnitedStates from "../../dictionary/privacy/privacy/en-US.mdx";
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
        name: format.get(METADATA_PROFILE.PRIVACY_POLICY_TITLE),
        href: HrefConfig.withinSite(locale, "privacy"),
      },
    ]}
  >
    <MDXLocaleSwitcher
      en-US={EnglishUnitedStates}
    />
  </MainPageWrapper>);
};
