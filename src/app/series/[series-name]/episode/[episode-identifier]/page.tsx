/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier
 * @description Page
 */

import { CachedIndicator } from "../../../../../components/cache/cached-indicator";
import { RedirectionCard } from "../../../../../components/common/redirection-card";
import { Description1 } from "../../../../../components/typography/description-1";
import { Header1 } from "../../../../../components/typography/header-1";
import { Header2 } from "../../../../../components/typography/header-2";
import { MainPageWrapper } from "../../../../../components/typography/main-page-wrapper";
import { Section } from "../../../../../components/typography/section";
import { VideoVideoCard } from "../../../../../components/video/video-card/video-card";
import { CacheableResponse } from "../../../../../data/cache/definition";
import { EPISODE_TYPE, EpisodeEntity } from "../../../../../data/definition/episode/episode";
import { SERIES_TYPE, SeriesEntity } from "../../../../../data/definition/series/series";
import { VIDEO_PLATFORM_TYPE, VideoPlatformEntity } from "../../../../../data/definition/video/video-platform";
import { requestSeriesMetadata } from "../../../../../data/request/series-metadata";
import { seriesInternationalization } from "../../../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../../../dictionary/series/_profile";
import { useLocale } from "../../../../../i18n/use-locale";
import { HrefConfig } from "../../../../../util/href";
import { logger } from "../../../../../util/log";
import { SIZE } from "../../../../../util/size";

type Props = {

    readonly params: {
        readonly "series-name": string;
        readonly "episode-identifier": string;
    };
};

export default async function Page(props: Props) {

    const locale = useLocale();
    const format = seriesInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE>> =
        await requestSeriesMetadata(props.params["series-name"]);

    const episode: EpisodeEntity<EPISODE_TYPE> | undefined =
        series.data.episodes.find((each) => {
            return each.identifier === props.params["episode-identifier"];
        });

    if (!episode) {

        logger.error("Episode Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return "NOT FOUND";
    }

    const videos = episode.videos[locale] as Array<VideoPlatformEntity<VIDEO_PLATFORM_TYPE>>;

    return (<MainPageWrapper
        locale={locale}
    >
        <Section>
            {series.data.original
                ? <Description1
                    noMargin
                >
                    {format.get(SERIES_PROFILE.ORIGINAL_ANNOTATION)}
                </Description1>
                : null}
            <Header1>
                {episode.title[locale]}
            </Header1>
            <Description1>
                {series.data.title[locale]} - {episode.identifier}
            </Description1>
        </Section>
        <Section
            marginTop
            className="flex flex-col gap-4"
        >
            <Header2
                noMargin
            >
                {format.get(SERIES_PROFILE.WATCH_VIDEOS)}
            </Header2>
            {videos.map((video: VideoPlatformEntity<VIDEO_PLATFORM_TYPE>, index: number) => {
                return (<VideoVideoCard
                    key={index}
                    video={video}
                />);
            })}
        </Section>
        <Section
            marginTop
            className="flex flex-col gap-4"
        >
            <Header2
                noMargin
            >
                {format.get(SERIES_PROFILE.GET_HANDS_ON)}
            </Header2>
            <RedirectionCard
                full
                size={SIZE.SMALL}
                title={format.get(SERIES_PROFILE.LEARN_THE_BASICS)}
                subtitle={format.get(SERIES_PROFILE.LEARN_THE_BASICS_DESCRIPTION)}
            />
            <RedirectionCard
                full
                size={SIZE.SMALL}
                title={format.get(SERIES_PROFILE.PREPARE_ENVIRONMENT)}
                titleHref={HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier, "prepare-environment")}
                subtitle={format.get(SERIES_PROFILE.PREPARE_ENVIRONMENT_DESCRIPTION)}
            />
            <RedirectionCard
                full
                size={SIZE.SMALL}
                title={format.get(SERIES_PROFILE.DEEP_DIVE)}
                titleHref={HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier, "deep-dive")}
                subtitle={format.get(SERIES_PROFILE.DEEP_DIVE_DESCRIPTION)}
            />
        </Section>
        <Section
            marginTop
        >
            <Header2>
                {format.get(SERIES_PROFILE.TRANSCRIPT)}
            </Header2>
            <RedirectionCard
                full
                title={format.get(SERIES_PROFILE.VIEW_TRANSCRIPT)}
                size={SIZE.SMALL}
                titleHref={HrefConfig.withinSite(
                    locale,
                    "series",
                    series.data.identifier,
                    "episode",
                    episode.identifier,
                    "transcript",
                )}
            />
        </Section>
        <div
            className="w-full mt-2"
        >
            <CachedIndicator
                cacheableResponse={series}
                locale={locale}
            />
        </div>
    </MainPageWrapper>);
};
