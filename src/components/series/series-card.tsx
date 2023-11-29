/**
* @author WMXPY
* @namespace Components_Series
* @description Series Card
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaBilibili } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { seriesInternationalization } from "../../dictionary/series/_intl";
import { useLocale } from "../../i18n/use-locale";
import { CardLinkButton } from "../common/card-link-button";
import { SERIES_PROFILE } from "../../dictionary/series/_profile";

export const SeriesCard: React.FC = () => {

    const locale: IETF_LOCALE = useLocale();
    const format = seriesInternationalization.format(locale);

    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">What To Play</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">A React-based game chooser</p>
            <div className="items-start space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse justify-start">
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
    );
};