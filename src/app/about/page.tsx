/**
 * @author WMXPY
 * @namespace About
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import EnglishUnitedStates from "../../dictionary/about/about/en-US.mdx";
import ChineseSimplified from "../../dictionary/about/about/zh-CN.mdx";

type Props = {
};

export default async function Page(props: Props) {

  return (<MDXLocaleSwitcher
    zh-CN={ChineseSimplified}
    en-US={EnglishUnitedStates}
  />);
};
