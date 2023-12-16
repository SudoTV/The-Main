/**
 * @author WMXPY
 * @namespace Expect
 * @description Optional
 * @override Expect
 */

import { Optional } from "@sudoo/optional";

export class ExpectOptional<T> {

    public static with<T>(optional: Optional<T>): ExpectOptional<T> {

        return new ExpectOptional(optional);
    }

    private readonly _optional: Optional<T>;

    private constructor(optional: Optional<T>) {

        this._optional = optional;
    }

    public toBeExist(): this {

        expect(this._optional.exists).toBeTruthy();
        return this;
    }

    public toBeEmpty(): this {

        expect(this._optional.exists).toBeFalsy();
        return this;
    }

    public toBeEqual(expected: T): this {

        expect(this._optional.getOrEmptyValueSymbol())
            .toEqual(expected);
        return this;
    }

    public toBeDeepEqual(expected: T): this {

        expect(this._optional.getOrEmptyValueSymbol())
            .toEqual(expected);
        return this;
    }
}
