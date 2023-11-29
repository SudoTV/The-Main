/**
 * @author WMXPY
 * @namespace About
 * @description Page
 */

import { MDX_H2 } from "../../components/mdx/h2";
import EnglishUnitedStates from "../../dictionary/about/about/en-US.mdx";
import { useLocale } from "../../i18n/use-locale";

type Props = {
};

export default async function Page(props: Props) {

  const locale = useLocale();

  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return (<main
    className="p-6 mx-auto w-full max-w-screen-xl text-left rtl:text-right"
  >
    <EnglishUnitedStates
      components={{
        h2: MDX_H2,
      }}
    />
  </main>);
};
