/**
* @author WMXPY
* @namespace Components_Footer
* @description Footer
*/

import { IETF_LOCALE } from "@sudoo/locale";
import Link from "next/link";
import * as React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";
import { footerInternationalization } from "../../dictionary/footer/_intl";
import { FOOTER_PROFILE } from "../../dictionary/footer/_profile";
import { useLocale } from "../../i18n/use-locale";
import { LocaleSwitcher } from "../preference/language-switcher";
import { ThemeSwitch } from "../preference/theme-switch";

export const LayoutFooter: React.FC = () => {

    const locale: IETF_LOCALE = useLocale();
    const format = footerInternationalization.format(locale);

    return (
        <footer>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-2 lg:py-4 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                            SudoTV © 2020-2024
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-2">
                                <Link
                                    href="/about"
                                    className=" hover:underline"
                                >
                                    {format.get(FOOTER_PROFILE.ABOUT_US)}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <div
                                    className="w-full flex gap-2"
                                >
                                    <Link
                                        href="https://github.com/SudoTV"
                                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-2 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        <IoLogoGithub
                                            size={24}
                                        />
                                    </Link>
                                    <Link
                                        href="https://github.com/SudoTV"
                                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-2 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        <SiDiscord
                                            size={24}
                                        />
                                    </Link>
                                    <Link
                                        href="https://github.com/SudoTV"
                                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 lg:px-2 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        <FaTelegramPlane
                                            size={24}
                                        />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {format.get(FOOTER_PROFILE.HELP_CENTER)}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link
                                    href="#"
                                    className="hover:underline"
                                >
                                    {format.get(FOOTER_PROFILE.CONTACT_US)}
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    href="/reprint"
                                    className="hover:underline"
                                >
                                    {format.get(FOOTER_PROFILE.REPRINT)}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {format.get(FOOTER_PROFILE.LEGAL)}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link
                                    href="/privacy"
                                    className="hover:underline"
                                >
                                    {format.get(FOOTER_PROFILE.PRIVACY_POLICY)}
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    href="/terms-of-service"
                                    className="hover:underline"
                                >
                                    {format.get(FOOTER_PROFILE.TERMS_OF_SERVICE)}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {format.get(FOOTER_PROFILE.PREFERENCES)}
                        </h2>
                        <ul className="text-gray-800">
                            <li className="mb-1">
                                <LocaleSwitcher />
                            </li>
                            <li className="mb-2">
                                <ThemeSwitch />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
