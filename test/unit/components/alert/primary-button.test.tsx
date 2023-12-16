/**
 * @author WMXPY
 * @namespace Components_Alert
 * @description Primary Button
 * @override Unit Test
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";
import { ALERT_TYPE } from "../../../../src/components/alert/definition";
import { AlertPrimaryButton } from "../../../../src/components/alert/primary-button";

describe("Given Components <AlertPrimaryButton> Component", (): void => {

    test("should be able to render content", async (): Promise<void> => {

        render(<React.Fragment>
            <AlertPrimaryButton
                type={ALERT_TYPE.INFO}
                text="test"
            />
        </React.Fragment>);

        expect(screen.queryByText("test")).toBeDefined();
    });

    test("should be able to trigger action", async (): Promise<void> => {

        let clicked: boolean = false;

        render(<React.Fragment>
            <AlertPrimaryButton
                type={ALERT_TYPE.INFO}
                text="test"
                onClick={() => clicked = true}
            />
        </React.Fragment>);

        screen.queryByText("test")!.click();

        expect(clicked).toBeDefined();
    });
});
