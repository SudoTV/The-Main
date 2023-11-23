/**
 * @author WMXPY
 * @namespace Error_Dependency
 * @description Dependency
 */

import { TheMainError } from "../the-main";

export class DependencyError extends TheMainError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {

        super(message, type, reason);

        Object.setPrototypeOf(this, DependencyError.prototype);
    }
}
