/**
 * @author WMXPY
 * @description Page
 */

import { headers } from "next/headers";

export default function Home(props: any) {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    console.log(headers(), props);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>Static page Root</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>
            <a href="/ssr">View a server-side rendered page.</a>
        </p>
    </main>);
};
