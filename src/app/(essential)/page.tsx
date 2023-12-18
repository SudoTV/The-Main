/**
 * @author WMXPY
 * @namespace Essential
 * @description Page
 */

import { MainPageWrapper } from "@/components/typography/main-page-wrapper";
import { WelcomeCode } from "@/components/welcome/welcome-code";
import { useLocale } from "@/i18n/use-locale";

export default async function Home() {

    const locale = useLocale();

    return (<MainPageWrapper
        locale={locale}
    >
        <WelcomeCode
            locale={locale}
        />
    </MainPageWrapper>);
};
