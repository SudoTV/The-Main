/**
 * @author WMXPY
 * @namespace Util
 * @description Environment
 */

import { Optional } from "@sudoo/optional";

export const GRAPHQL_GITHUB_API_TOKEN: Optional<string> =
    Optional.ofUndefinable(process.env.GRAPHQL_GITHUB_API_TOKEN);
