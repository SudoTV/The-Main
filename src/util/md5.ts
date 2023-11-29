/**
 * @author WMXPY
 * @namespace Util
 * @description MD5
 */

import * as Crypto from "crypto";

export const digestMD5String = (content: string): string => {

    const hash: Crypto.Hash = Crypto.createHash("md5");
    hash.update(content);

    return hash.digest("hex");
};
