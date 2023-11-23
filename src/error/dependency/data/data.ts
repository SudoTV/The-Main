/**
 * @author WMXPY
 * @namespace Error_Dependency_Data
 * @description Data
 */

import { DependencyError } from "../dependency";

export class DependencyDataError extends DependencyError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {

        super(message, type, reason);

        Object.setPrototypeOf(this, DependencyDataError.prototype);
    }
}
