// @ts-check

import createMDX from "@next/mdx";
import { IETF_LOCALE } from "@sudoo/locale";
import remarkGfm from "remark-gfm";

const ACCEPTED_LOCALES = [
    IETF_LOCALE.ENGLISH_UNITED_STATES,
    IETF_LOCALE.CHINESE_SIMPLIFIED,
];

/** @type {import('next').NextConfig} */
const nextConfig = {

    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});
export default withMDX(nextConfig);
