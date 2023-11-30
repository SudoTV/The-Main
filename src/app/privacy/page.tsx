/**
 * @author WMXPY
 * @namespace Privacy
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import EnglishUnitedStates from "../../dictionary/privacy/privacy/en-US.mdx";
import ChineseSimplified from "../../dictionary/privacy/privacy/zh-CN.mdx";

type Props = {
};

export default async function Page(props: Props) {

  return (<MDXLocaleSwitcher
    zh-CN={ChineseSimplified}
    en-US={EnglishUnitedStates}
  />);
};
