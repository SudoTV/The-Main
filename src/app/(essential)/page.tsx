/**
 * @author WMXPY
 * @namespace Essential
 * @description Page
 */

import { WelcomeCode } from "@/components/welcome/welcome-code";

export default async function Home() {

    return (<main
        className="flex flex-col items-center justify-between p-4 sm:p-24"
    >
        <WelcomeCode />
    </main>);
};
