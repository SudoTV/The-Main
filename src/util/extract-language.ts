/**
 * @author WMXPY
 * @namespace Util
 * @description Extract Language
 */

export const extractLanguageFromClassName = (className?: string): string => {

    if (!className) {
        return "";
    }

    const languageClass: string | undefined = className
        .split(" ")
        .filter((token: string) => token.startsWith("language-"))
    [0];

    if (!languageClass) {
        return "";
    }

    return languageClass.replace(/language-/, "");
};
