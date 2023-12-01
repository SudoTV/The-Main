/**
 * @author WMXPY
 * @namespace Util
 * @description Parse Frontmatter
 */

import { load } from "js-yaml";

export type ParseFrontmatterResult<T> = {

    readonly frontmatter: T;
    readonly content: string;
};

export const parseFrontmatter = <T = any>(
    markdown: string,
): ParseFrontmatterResult<T> => {

    if (!markdown.startsWith("---")) {
        return {
            frontmatter: {} as T,
            content: markdown,
        };
    }

    const splited: string[] = markdown.split("---");
    const frontmatter: T = load(splited[1].trim()) as T;

    return {
        frontmatter,
        content: splited.slice(2).join("---").trim(),
    };
};
