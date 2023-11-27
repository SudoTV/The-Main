/**
 * @author WMXPY
 * @description Not Found
 */

import { headers } from "next/headers";

export default function NotFound(props: any) {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    const headersList = headers();

    const domain = headersList.get("host") || "";
    const fullUrl = headersList.get("referer") || "";
    const [, pathname] = fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

    console.log(pathname);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>NOT FOUND</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
    </main>);
};
