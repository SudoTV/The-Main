/**
 * @author WMXPY
 * @namespace Contribute_Series
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../../components/mdx/locale-switcher";
import { MainPageWrapper } from "../../../components/typography/main-page-wrapper";
import { contributeInternationalization } from "../../../dictionary/contribute/_intl";
import { CONTRIBUTE_PROFILE } from "../../../dictionary/contribute/_profile";
import EnglishUnitedStates from "../../../dictionary/contribute/series/en-US.mdx";
import ChineseSimplified from "../../../dictionary/contribute/series/zh-CN.mdx";
import { useLocale } from "../../../i18n/use-locale";
import { HrefConfig } from "../../../util/href";

type Props = {
};

export default async function Page(props: Props) {

  const locale = useLocale();
  const format = contributeInternationalization.format(locale);

  return (<MainPageWrapper
    locale={locale}
    breadcrumbElements={[
      {
        name: format.get(CONTRIBUTE_PROFILE.CONTRIBUTE),
        href: HrefConfig.withinSite(locale, "contribute"),
      },
      {
        name: format.get(CONTRIBUTE_PROFILE.SERIES_CONTENT_AND_METADATA),
        href: HrefConfig.withinSite(locale, "contribute", "series"),
      },
    ]}
  >
    <MDXLocaleSwitcher
      zh-CN={ChineseSimplified}
      en-US={EnglishUnitedStates}
    />
  </MainPageWrapper>);
};
