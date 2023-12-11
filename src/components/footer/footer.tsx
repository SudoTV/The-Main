/**
* @author WMXPY
* @namespace Components_Footer
* @description Footer
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";
import { footerInternationalization } from "@/dictionary/footer/_intl";
import { FOOTER_PROFILE } from "@/dictionary/footer/_profile";
import { HrefConfig } from "@/util/href";
import { HrefLink } from "../common/href-link";
import { LocaleSwitcher } from "../preference/language-switcher";
import { ThemeSwitch } from "../preference/theme-switch";
import { LayoutFooterLinkIcon } from "./icon/link-icon";

export type LayoutFooterProps = {

    readonly locale: IETF_LOCALE;
};

export const LayoutFooter: React.FC<LayoutFooterProps> = (
    props: LayoutFooterProps,
) => {

    const format = footerInternationalization.format(props.locale);

    return (
        <footer
            className="w-full"
        >
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-2 lg:py-4 md:grid-cols-4">
                    <div>
                        <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                            SudoTV
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "about",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.ABOUT_US)}
                                </HrefLink>
                            </li>
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "contribute",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.CONTRIBUTE)}
                                </HrefLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {format.get(FOOTER_PROFILE.HELP_CENTER)}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "contact",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.CONTACT_US)}
                                </HrefLink>
                            </li>
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "reprint",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.REPRINT)}
                                </HrefLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {format.get(FOOTER_PROFILE.LEGAL)}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "privacy",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.PRIVACY_POLICY)}
                                </HrefLink>
                            </li>
                            <li className="mb-4">
                                <HrefLink
                                    href={HrefConfig.withinSite(
                                        props.locale,
                                        "terms",
                                    )}
                                >
                                    {format.get(FOOTER_PROFILE.TERMS_OF_SERVICE)}
                                </HrefLink>
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
                            <li className="mb-1 sm:mb-2">
                                <ThemeSwitch />
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="w-full flex px-4 pb-2 items-center justify-between flex-wrap"
                >
                    <div
                        className="flex gap-2 sm:gap-3"
                    >
                        <LayoutFooterLinkIcon
                            href={HrefConfig.external("https://github.com/SudoTV")}
                            icon={IoLogoGithub}
                        />
                        <LayoutFooterLinkIcon
                            href={HrefConfig.external("https://discord.gg/Mr8dPdQ4")}
                            icon={SiDiscord}
                        />
                        <LayoutFooterLinkIcon
                            href={HrefConfig.external("https://t.me/sudotv")}
                            icon={FaTelegramPlane}
                        />
                    </div>
                    <div
                        className="flex gap-2 items-center"
                    >
                        <div className="font-semibold text-gray-900 dark:text-white">
                            {">"}
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            © 2018-2024
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};
