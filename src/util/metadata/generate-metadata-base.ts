/**
 * @author WMXPY
 * @namespace Util_Metadata
 * @description Generate Metadata Base
 */

import type { Metadata } from "next";
import { headers } from "next/headers";
import { findUrlFromHeaders } from "./find-url-from-header";

export const generateMetadataBase = (): Metadata["metadataBase"] => {

    const headersList: Headers = headers();

    const url = findUrlFromHeaders(headersList);
    const urlInstance: URL = new URL(url);

    return new URL(urlInstance.origin);
};
