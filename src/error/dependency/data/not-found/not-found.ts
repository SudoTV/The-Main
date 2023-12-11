/**
 * @author WMXPY
 * @namespace Error_Dependency_Data_NotFound
 * @description Not Found
 */

import { DependencyDataError } from "../data";

export class DependencyDataNotFoundError extends DependencyDataError {

    protected constructor(
        message: string,
        type: string,
        reason?: any,
    ) {

        super(message, type, reason);

        Object.setPrototypeOf(this, DependencyDataNotFoundError.prototype);
    }
}
