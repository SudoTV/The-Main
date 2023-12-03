/**
 * @author WMXPY
 * @description 404
 */

import { LayoutFooter } from "../components/footer/footer";
import { LayoutHeader } from "../components/header/header";
import "../styles/globals.css";

export default function Custom404() {

    return (<main
        className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <LayoutHeader />
        <h1>404 - Not Found</h1>
        <LayoutFooter />
    </main>);
};
