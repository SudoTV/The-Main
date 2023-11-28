// @ts-check

/** @type {import('next').NextConfig} */
const { IETF_LOCALE } = require("@sudoo/locale");

const ACCEPTED_LOCALES = [
    IETF_LOCALE.ENGLISH_UNITED_STATES,
    IETF_LOCALE.CHINESE_SIMPLIFIED,
];

const nextConfig = {
    trailingSlash: true,
    async rewrites() {

        const rewriteList = [];
        for (const acceptedLocale of ACCEPTED_LOCALES) {
            rewriteList.push({
                source: `/${acceptedLocale}/`,
                destination: "/",
            }, {
                source: `/${acceptedLocale}/:path*`,
                destination: "/:path*",
            });
        }
        return rewriteList;
    },
};

module.exports = nextConfig;
