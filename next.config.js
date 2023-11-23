/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: [
            "default",
            "en-US",
            "zh-CN",
        ],
        defaultLocale: "default",
        localeDetection: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
