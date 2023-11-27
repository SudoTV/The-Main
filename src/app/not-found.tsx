/**
 * @author WMXPY
 * @description Not Found
 */

export default function NotFound(props: any) {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    console.log(props);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>NOT FOUND</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
    </main>);
};
