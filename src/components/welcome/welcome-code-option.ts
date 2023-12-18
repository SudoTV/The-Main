/**
* @author WMXPY
* @namespace Components_Welcome
* @description Welcome Code Option
*/

import { HrefConfig } from "@/util/href";

export type WelcomeCodeOptionRedirect = {

    readonly href: HrefConfig;

    readonly functionName: string;
    readonly humanFriendlyName: string;

    readonly description: string;
};

export type WelcomeCodeOptionQuickLink = {

    readonly href: HrefConfig;

    readonly properties: Record<string, string>;
};

export type WelcomeCodeOptionProps = {

    readonly redirects: WelcomeCodeOptionRedirect[];
    readonly quickLinks: WelcomeCodeOptionQuickLink[];
};
