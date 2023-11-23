/**
 * @author WMXPY
 * @description Page
 */

type Props = {

    readonly params: {
        readonly locale: string;
    };
};

export default function Home(props: Props) {

    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(buildDate);

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <h1>Static page</h1>
        <p>This page is static. It was built on {formattedDate}.</p>
        <p>
            <a href="/ssr">View a server-side rendered page.</a>
        </p>
    </main>);
};
