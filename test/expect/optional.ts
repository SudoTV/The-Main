/**
 * @author WMXPY
 * @namespace Expect
 * @description Optional
 * @override Expect
 */

import { Optional } from "@sudoo/optional";
import { expect } from "chai";

export class ExpectOptional<T> {

    public static with<T>(optional: Optional<T>): ExpectOptional<T> {

        return new ExpectOptional(optional);
    }

    private readonly _optional: Optional<T>;

    private constructor(optional: Optional<T>) {

        this._optional = optional;
    }

    public toBeExist(): this {

        expect(this._optional.exists).to.be.true;
        return this;
    }

    public toBeEmpty(): this {

        expect(this._optional.exists).to.be.false;
        return this;
    }

    public toBeEqual(expected: T): this {

        expect(this._optional.getOrEmptyValueSymbol())
            .to.be.equal(expected);
        return this;
    }

    public toBeDeepEqual(expected: T): this {

        expect(this._optional.getOrEmptyValueSymbol())
            .to.be.deep.equal(expected);
        return this;
    }
}
