/**
 * @author WMXPY
 * @namespace Privacy
 * @description Page
 */

import { MDXLocaleSwitcher } from "../../components/mdx/locale-switcher";
import EnglishUnitedStates from "../../dictionary/privacy/privacy/en-US.mdx";

type Props = {
};

export default async function Page(props: Props) {

  return (<MDXLocaleSwitcher
    zh-CN={EnglishUnitedStates}
    en-US={EnglishUnitedStates}
  />);
};
