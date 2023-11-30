/**
 * @author WMXPY
 * @namespace Reprint
 * @description Page
 */

import { RedirectionCard } from "../../components/common/redirection-card";
import { MDX_H2 } from "../../components/mdx/h2";
import EnglishUnitedStates from "../../dictionary/privacy/privacy/en-US.mdx";
import { reprintInternationalization } from "../../dictionary/reprint/_intl";
import { REPRINT_PROFILE } from "../../dictionary/reprint/_profile";
import { useLocale } from "../../i18n/use-locale";
import { SIZE } from "../../util/size";

type Props = {
};

export default async function Page(props: Props) {

  const locale = useLocale();
  const format = reprintInternationalization.format(locale);

  return (<main
    className="p-6 mx-auto w-full max-w-screen-xl text-left rtl:text-right"
  >
    <article>
      <h2
        className="text-3xl font-bold"
      >
        {format.get(REPRINT_PROFILE.REPRINT)}
      </h2>
      <p
        className="my-2 text-gray-900 dark:text-gray-400"
      >
        {format.get(REPRINT_PROFILE.REPRINT_INDEX_DESCRIPTION)}
      </p>
      <section
        className="flex flex-col gap-4 my-4"
      >
        <RedirectionCard
          size={SIZE.SMALL}
          title={format.get(REPRINT_PROFILE.SERIES_CODE_AND_CONTENT)}
          titleHref="/reprint/series"
          description={format.get(REPRINT_PROFILE.SERIES_CODE_AND_CONTENT_DESCRIPTION)}
        />
        <RedirectionCard
          size={SIZE.SMALL}
          title={format.get(REPRINT_PROFILE.SITE_CONTENT_AND_SOURCE_CODE)}
          titleHref="/reprint/sites"
          description={format.get(REPRINT_PROFILE.SITE_CONTENT_AND_SOURCE_CODE_DESCRIPTION)}
        />
        <RedirectionCard
          size={SIZE.SMALL}
          title={format.get(REPRINT_PROFILE.SERIES_VIDEOS)}
          titleHref="/reprint/videos"
          description={format.get(REPRINT_PROFILE.SERIES_VIDEOS_DESCRIPTION)}
        />
      </section>
      <p
        className="my-2 text-gray-900 dark:text-gray-400"
      >
        {format.get(REPRINT_PROFILE.REPRINT_INDEX_EXTRA)}
      </p>
    </article>
  </main>);
};
