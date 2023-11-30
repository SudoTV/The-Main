/**
* @author WMXPY
* @namespace Components_Series_SeriesCard
* @description Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaBilibili } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { seriesInternationalization } from "../../../dictionary/series/_intl";
import { SERIES_PROFILE } from "../../../dictionary/series/_profile";
import { useLocale } from "../../../i18n/use-locale";
import { CardLinkButton } from "../../common/card-link-button";

export const SeriesCard: React.FC = () => {

    const locale: IETF_LOCALE = useLocale();
    const format = seriesInternationalization.format(locale);

    return (
        <div
            className="w-full flex flex-col sm:flex-row justify-between p-4 bg-white border border-gray-200 rounded-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <div>
                <h5
                    className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
                >
                    What To Play
                </h5>
                <p
                    className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
                >
                    A React-based game chooser
                </p>
            </div>
            <div
                className="flex flex-col items-start sm:items-end"
            >
                <div
                    className="text-base text-gray-500 sm:text-lg"
                >
                    Latest Episode
                </div>
                <div
                    className="flex flex-row gap-2 mt-2"
                >
                    <CardLinkButton
                        icon={FaBilibili}
                        href="https://space.bilibili.com/457583"
                        prefix={format.get(SERIES_PROFILE.WATCH_ON)}
                        title={format.get(SERIES_PROFILE.BILIBILI)}
                    />
                    <CardLinkButton
                        icon={IoDocumentText}
                        href="https://space.bilibili.com/457583"
                        prefix={format.get(SERIES_PROFILE.VIEW)}
                        title={format.get(SERIES_PROFILE.TRANSCRIPT)}
                    />
                </div>
            </div>
        </div>
    );
};
