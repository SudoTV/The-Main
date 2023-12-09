/**
 * @author WMXPY
 * @namespace Util
 * @description MD5
 */

import * as Crypto from "crypto";

export const digestMD5String = async (content: string): Promise<string> => {

    const md5 = Crypto.createHash("md5");
    md5.update(content);

    return md5.digest("hex");
};
