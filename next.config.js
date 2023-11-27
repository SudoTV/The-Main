/** @type {import('next').NextConfig} */
const { LOCALE } = require("@sudoo/locale");

const ENTRY_LOCALE = "$default";

const nextConfig = {
    i18n: {
        locales: [
            ENTRY_LOCALE,
            LOCALE.ENGLISH_UNITED_STATES,
            LOCALE.CHINESE_SIMPLIFIED,
        ],
        defaultLocale: ENTRY_LOCALE,
        localeDetection: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
