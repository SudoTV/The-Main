/** @type {import('next').NextConfig} */
const nextConfig = {
    debug: process.env.NODE_ENV === "development",
    i18n: {
        locales: [
            "en-US",
            "zh-CN",
        ],
        defaultLocale: "en-US",
    },
};

module.exports = nextConfig;
