/**
 * @author WMXPY
 * @namespace Components_I18N
 * @description Theme Switch
 */
"use client";

import * as React from "react";
import { IoInvertModeOutline, IoMoon, IoSunny } from "react-icons/io5";
import { ButtonGroup } from "../common/button-group/button-group";
import { ButtonGroupButton } from "../common/button-group/button-group-button";

export const ThemeSwitch: React.FC = () => {

    const [activeTheme, setActiveTheme] = React.useState<string>("default");

    React.useEffect(() => {

        const isUndefined: boolean =
            document.body.dataset.theme === "undefined"
            || typeof document.body.dataset.theme === "undefined";

        setActiveTheme(
            isUndefined
                ? "default"
                : document.body.dataset.theme as "light" | "dark",
        );
    }, []);

    React.useEffect(() => {

        const newTheme = activeTheme === "default"
            ? undefined
            : activeTheme;
        document.body.dataset.theme = newTheme;

        if (typeof newTheme === "string") {
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    }, [activeTheme]);

    return (
        <ButtonGroup>
            <ButtonGroupButton
                activated={activeTheme === "light"}
                onClick={() => {
                    setActiveTheme("light");
                }}
            >
                <IoSunny
                    size={16}
                />
            </ButtonGroupButton>
            <ButtonGroupButton
                activated={activeTheme === "default"}
                onClick={() => {
                    setActiveTheme("default");
                }}
            >
                <IoInvertModeOutline
                    size={16}
                />
            </ButtonGroupButton>
            <ButtonGroupButton
                activated={activeTheme === "dark"}
                onClick={() => {
                    setActiveTheme("dark");
                }}
            >
                <IoMoon
                    size={16}
                />
            </ButtonGroupButton>
        </ButtonGroup>
    );
};
