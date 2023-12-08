/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Find Url From Header
 */

export const findUrlFromHeaders = (header: Headers): string => {

    const xUrl: string = header.get("x-url") ?? "";

    if (typeof xUrl === "string"
        && xUrl.length > 0) {

        return xUrl;
    }

    return xUrl;
};
