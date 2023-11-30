/**
 * @author WMXPY
 * @namespace Reprint_Series
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../../components/mdx/locale-switcher";
import EnglishUnitedStates from "../../../dictionary/reprint/sites/en-US.mdx";
import ChineseSimplified from "../../../dictionary/reprint/sites/zh-CN.mdx";

type Props = {
};

export default async function Page(props: Props) {

  return (<MDXLocaleSwitcher
    zh-CN={ChineseSimplified}
    en-US={EnglishUnitedStates}
  />);
};
