/**
 * @author WMXPY
 * @namespace Util
 * @description Environment
 */

import { Optional } from "@sudoo/optional";

export const GITHUB_API_TOKEN: Optional<string> =
    Optional.ofUndefinable(process.env.GITHUB_API_TOKEN);
