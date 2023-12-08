/**
 * @author WMXPY
 * @description Manifest
 */

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

    return {
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
    };
}
