/**
 * @author WMXPY
 * @namespace Error_Dependency_Data
 * @description Data Not Found
 */

import { DependencyDataError } from "./data";

export class DependencyDataNotFoundError extends DependencyDataError {

    public static create(
        message: string,
    ): DependencyDataNotFoundError {

        return new DependencyDataNotFoundError(
            message,
        );
    }

    protected constructor(
        message: string,
        reason?: any,
    ) {

        super(message, "DependencyDataNotFoundError", reason);

        Object.setPrototypeOf(this, DependencyDataNotFoundError.prototype);
    }
}
