/**
 * @author WMXPY
 * @namespace Util
 * @description Parse Markdown
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { Fragment } from "react";
import * as prod from "react/jsx-runtime";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Converter } from "showdown";
import { unified } from "unified";
import { markdownComponentsMap } from "../components/markdown/component-map";
import { parseFrontmatter } from "./parse-frontmatter";

type FrontMatter = {

    readonly locale: IETF_LOCALE;
};

export type ParseMarkdownResult = {

    readonly locale?: IETF_LOCALE;
    readonly reactNodes: any;
};

export const parseMarkdown = async (
    markdown: string,
): Promise<ParseMarkdownResult> => {

    const frontMatterParsed = parseFrontmatter<FrontMatter>(markdown);

    const showdownConverter = new Converter();
    showdownConverter.setFlavor("github");

    const html = showdownConverter.makeHtml(frontMatterParsed.content);

    const rehypeParser = unified()
        .use(rehypeParse, {
            fragment: true,
        })
        .use(rehypeReact, {
            Fragment: Fragment,
            // @ts-expect-error: the react types are missing.
            jsx: prod.jsx,
            // @ts-expect-error: the react types are missing.
            jsxs: prod.jsxs,
            components: markdownComponentsMap,
        });

    const rehypeParsedResult = await rehypeParser.process(
        html,
    );

    return {
        locale: frontMatterParsed.frontmatter.locale,
        reactNodes: rehypeParsedResult.result,
    };
};
