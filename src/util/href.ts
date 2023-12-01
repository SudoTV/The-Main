/**
* @author WMXPY
* @namespace Util
* @description Href
*/

import { IETF_LOCALE } from "@sudoo/locale";

export class HrefConfig {

    public static withinSite(
        locale: IETF_LOCALE,
        ...href: string[]
    ): HrefConfig {

        return new HrefConfig(false, `/${locale}/${href.join("/")}/`);
    }

    public static external(
        href: string,
    ): HrefConfig {

        return new HrefConfig(true, href);
    }

    private readonly _external: boolean;
    private readonly _href: string;

    private constructor(
        external: boolean,
        href: string,
    ) {

        this._external = external;
        this._href = href;
    }

    public get external(): boolean {
        return this._external;
    }

    public get href(): string {
        return this._href;
    }
}
