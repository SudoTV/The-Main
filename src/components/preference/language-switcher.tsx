/**
 * @author WMXPY
 * @namespace Components_I18N
 * @description Language Switcher
 */
"use client";

import { IETF_LOCALE, verifyIETFLocale } from "@sudoo/locale";
import { setCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { DEFAULT_LOCALE } from "../../i18n/config";
import { findLocaleFromUrl } from "../../util/metadata/find-locale-from-url";

const PREFERRED_LOCALE_COOKIE: string = "preferred-locale";

const redirectedPathName = (pathName: string, locale: IETF_LOCALE) => {

    if (!pathName) {
        return "/";
    };

    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
};

export const LocaleSwitcher: React.FC = () => {

    const pathName = usePathname();
    const router = useRouter();

    const locale = findLocaleFromUrl(pathName ?? "");
    const currentLocale = locale.getOrDefault(DEFAULT_LOCALE);

    return (
        <select
            title="Language-Select"
            className="mb-2 text-sm rounded-md w-full p-2 border cursor-pointer border-gray-300 bg-white dark:bg-black dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            value={currentLocale}
            onChange={(
                event: React.ChangeEvent<HTMLSelectElement>,
            ) => {

                const newLocale: string = event.target.value;
                if (!verifyIETFLocale(newLocale)) {
                    return;
                }

                router.replace(
                    redirectedPathName(pathName ?? "", newLocale),
                    {
                        locale,
                    },
                );

                document.body.style.userSelect = "none";
                document.body.style.pointerEvents = "none";

                setCookie(PREFERRED_LOCALE_COOKIE, newLocale, {
                    sameSite: "lax",
                });

                // Refresh the page after the locale is changed
                setTimeout(() => {
                    router.refresh();

                    document.body.style.userSelect = "auto";
                    document.body.style.pointerEvents = "auto";
                }, 200);
            }}
        >
            <option value={IETF_LOCALE.CHINESE_SIMPLIFIED}>简体中文</option>
            <option value={IETF_LOCALE.ENGLISH_UNITED_STATES}>English</option>
        </select>
    );
};
