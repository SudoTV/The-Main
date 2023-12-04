/**
 * @author WMXPY
 * @namespace About
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import { MainPageWrapper } from "../../components/typography/main-page-wrapper";
import EnglishUnitedStates from "../../dictionary/about/about/en-US.mdx";
import ChineseSimplified from "../../dictionary/about/about/zh-CN.mdx";
import { useLocale } from "../../i18n/use-locale";

type Props = {
};

export default async function Page(props: Props) {

  const locale = useLocale();

  return (<MainPageWrapper
    locale={locale}
  >
    <MDXLocaleSwitcher
      zh-CN={ChineseSimplified}
      en-US={EnglishUnitedStates}
    />
  </MainPageWrapper>);
};
