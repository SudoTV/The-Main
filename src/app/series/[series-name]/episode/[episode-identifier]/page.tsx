/**
 * @author WMXPY
 * @namespace Series_SeriesName_Episode_EpisodeIdentifier
 * @description Page
 */

import { EmptyValueSymbol } from "@sudoo/symbol";
import { notFound } from "next/navigation";
import { RedirectionCard } from "../../../../../components/common/redirection-card";
import { createSeriesDBRepositoryConfig } from "../../../../../components/contribute/repositories";
import { SeriesEpisodesHandsOn } from "../../../../../components/series/episode-hands-on/episode-hands-on";
import { Description1 } from "../../../../../components/typography/description-1";
import { Header1 } from "../../../../../components/typography/header-1";
import { Header2 } from "../../../../../components/typography/header-2";
import { MainPageWrapper } from "../../../../../components/typography/main-page-wrapper";
import { Section } from "../../../../../components/typography/section";
import { VideoNoVideoCard } from "../../../../../components/video/video-card/no-video-card";
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
    const seriesFormat = seriesInternationalization.format(locale);

    const series: CacheableResponse<SeriesEntity<SERIES_TYPE> | typeof EmptyValueSymbol> =
        await requestSeriesMetadata(props.params["series-name"]);

    if (series.data === EmptyValueSymbol) {

        logger.error("Series Not Found", props.params["series-name"]);
        return notFound();
    }

    const episode: EpisodeEntity<EPISODE_TYPE> | undefined =
        series.data.episodes.find((each) => {
            return each.identifier === props.params["episode-identifier"];
        });

    if (!episode) {

        logger.error("Episode Not Found", props.params["series-name"], props.params["episode-identifier"]);
        return notFound();
    }

    const videos = episode.videos[locale] as Array<VideoPlatformEntity<VIDEO_PLATFORM_TYPE>>;

    return (<MainPageWrapper
        locale={locale}
        breadcrumbElements={[
            {
                name: seriesFormat.get(SERIES_PROFILE.SERIES_TITLE),
                href: HrefConfig.withinSite(locale, "series"),
            },
            {
                name: series.data.title[locale] as string,
                href: HrefConfig.withinSite(locale, "series", series.data.identifier),
            },
            {
                name: episode.title[locale] as string,
                href: HrefConfig.withinSite(locale, "series", series.data.identifier, "episode", episode.identifier),
            },
        ]}
        cacheableResponse={series}
        contributeAnnotation={createSeriesDBRepositoryConfig(
            "series",
            series.data.identifier,
            "metadata.yml",
        )}
    >
        <Section>
            {series.data.original
                ? <Description1
                    noMargin
                >
                    {seriesFormat.get(SERIES_PROFILE.ORIGINAL_ANNOTATION)}
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
                {seriesFormat.get(SERIES_PROFILE.WATCH_VIDEOS)}
            </Header2>
            {videos.length >= 1
                ? videos.map((video: VideoPlatformEntity<VIDEO_PLATFORM_TYPE>, index: number) => {
                    return (<VideoVideoCard
                        key={index}
                        video={video}
                    />);
                })
                : <VideoNoVideoCard />}
        </Section>
        <SeriesEpisodesHandsOn
            series={series.data}
            episode={episode}
        />
        <Section
            marginTop
            className="flex flex-col gap-4"
        >
            <Header2
                noMargin
            >
                {seriesFormat.get(SERIES_PROFILE.RESOURCES)}
            </Header2>
            <RedirectionCard
                full
                title={seriesFormat.get(SERIES_PROFILE.VIEW_TRANSCRIPT_TITLE)}
                subtitle={seriesFormat.get(SERIES_PROFILE.VIEW_TRANSCRIPT_DESCRIPTION)}
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
            <RedirectionCard
                full
                title={seriesFormat.get(SERIES_PROFILE.REPRINT_EPISODE_VIDEO_TITLE)}
                subtitle={seriesFormat.get(SERIES_PROFILE.REPRINT_EPISODE_VIDEO_DESCRIPTION)}
                size={SIZE.SMALL}
                titleHref={HrefConfig.withinSite(
                    locale,
                    "reprint",
                )}
            />
        </Section>
    </MainPageWrapper>);
};
