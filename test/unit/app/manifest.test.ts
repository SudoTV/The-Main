/**
 * @author WMXPY
 * @namespace App
 * @description Manifest
 * @override Unit Test
 */

import { MetadataRoute } from "next";
import manifest from "../../../src/app/manifest";

describe("Given Generated <manifest> Component", (): void => {

    test("should be able to generate SudoTV manifest", (): void => {

        const manifestValue: MetadataRoute.Manifest = manifest();

        expect(manifestValue).toEqual({
            name: "SudoTV The Main",
            short_name: "SudoTV",
            description: "SudoTV The Main, the portal page for SudoTV Network",
            start_url: "/",
            display: "standalone",
            background_color: "#FFFFFF",
            theme_color: "#FFFFFF",
            icons: [
                {
                    src: "/icon/small.png",
                    sizes: "48x48",
                    type: "image/png",
                },
                {
                    src: "/icon/medium.png",
                    sizes: "96x96",
                    type: "image/png",
                },
                {
                    src: "/icon/large.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        });
    });
});
