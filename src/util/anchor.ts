/**
 * @author WMXPY
 * @namespace Util
 * @description Anchor
 */

export const getTitleAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[?!]/g, "")
        .replace(/[ ]/g, "-");
};
