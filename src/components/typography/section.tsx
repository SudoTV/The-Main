/**
* @author WMXPY
* @namespace Components_Typography
* @description Section
*/

import * as React from "react";

export type SectionProps = {

    readonly children?: any;

    readonly marginTop?: boolean;
    readonly marginBottom?: boolean;

    readonly className?: string;
};

export const Section: React.FC<SectionProps> = (props: SectionProps) => {

    const classes: string[] = [
        "w-full",
    ];

    if (props.marginTop) {
        classes.push("mt-4");
    }

    if (props.marginBottom) {
        classes.push("mb-4");
    }

    if (props.className) {
        classes.push(props.className);
    }

    return (
        <section
            className={classes.join(" ")}
        >
            {props.children}
        </section>
    );
};
