/**
 * @author WMXPY
 * @namespace Util
 * @description MD5
 */

export const digestMD5String = async (content: string): Promise<string> => {

    const encoder: TextEncoder = new TextEncoder();
    const decoder: TextDecoder = new TextDecoder("utf-8");

    const encodedContext = encoder.encode(content);
    const hash: ArrayBuffer = await crypto.subtle.digest("SHA-1", encodedContext);

    return decoder.decode(hash);
};
