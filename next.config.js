// @ts-check

/** @type {import('next').NextConfig} */
const { LOCALE } = require("@sudoo/locale");

const ENTRY_LOCALE = "$default";

const ACCEPTED_LOCALES = [
    LOCALE.ENGLISH_UNITED_STATES,
    LOCALE.CHINESE_SIMPLIFIED,
];

const nextConfig = {
    i18n: {
        locales: [
            ENTRY_LOCALE,
            ...ACCEPTED_LOCALES,
        ],
        defaultLocale: ENTRY_LOCALE,
        localeDetection: false,
    },
    trailingSlash: true,
    async rewrites() {

        const rewriteList = [];
        // for (const acceptedLocale of ACCEPTED_LOCALES) {
        //     rewriteList.push({
        //         source: `/${acceptedLocale}/`,
        //         destination: "/",
        //     }, {
        //         source: `/${acceptedLocale}/:path*`,
        //         destination: "/:path*",
        //     });
        // }

        console.log(rewriteList);
        return rewriteList;
    },
};

module.exports = nextConfig;
