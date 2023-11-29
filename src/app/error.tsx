/**
 * @author WMXPY
 * @description Error
 */
"use client";

export default function Error() {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>ERROR</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
    </main>);
};
