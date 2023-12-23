/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Find Is External From Header
 */

import { findUrlFromHeaders } from "./find-url-from-header";

export const findIsExternalFromHeaders = (
    header: Headers,
    targetUrl: string,
): boolean => {

    if (targetUrl.startsWith("mailto")) {
        return true;
    }

    if (targetUrl.startsWith("tel")) {
        return true;
    }

    if (targetUrl.startsWith("sms")) {
        return true;
    }

    if (targetUrl.startsWith("/")) {
        return false;
    }

    const url: string = findUrlFromHeaders(header);

    const urlObject: URL = new URL(url);
    const targetUrlObject: URL = new URL(targetUrl);

    return urlObject.host !== targetUrlObject.host;
};
