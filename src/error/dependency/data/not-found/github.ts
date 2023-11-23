/**
 * @author WMXPY
 * @namespace Error_Dependency_Data_NotFound
 * @description Github
 */

import { DependencyDataNotFoundError } from "./not-found";

export class DependencyDataNotFoundGithubError extends DependencyDataNotFoundError {

    public static create(
        owner: string,
        repo: string,
        branch: string,
        paths: string[],
    ): DependencyDataNotFoundGithubError {

        return new DependencyDataNotFoundGithubError([
            `Github Data Not Found from:`,
            `Owner: ${owner}`,
            `Repo: ${repo}`,
            `Branch: ${branch}`,
            `Paths: ${paths.join('/')}`,
        ].join(" "));
    }

    protected constructor(
        message: string,
        reason?: any,
    ) {

        super(message, "DependencyDataNotFoundGithubError", reason);

        Object.setPrototypeOf(this, DependencyDataNotFoundError.prototype);
    }
}
