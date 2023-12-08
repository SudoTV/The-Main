/**
 * @author WMXPY
 * @namespace Components_Alert
 * @description Secondary Button
 * @override Unit Test
 */

import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import * as React from "react";
import { ALERT_TYPE } from "../../../../src/components/alert/definition";
import { AlertSecondaryButton } from "../../../../src/components/alert/secondary-button";

describe("Given Components <AlertSecondaryButton> Component", (): void => {

    it("should be able to render content", async (): Promise<void> => {

        render(<React.Fragment>
            <AlertSecondaryButton
                type={ALERT_TYPE.INFO}
                text="test"
            />
        </React.Fragment>);

        expect(screen.queryByText("test")).to.be.exist;
    });

    it("should be able to trigger action", async (): Promise<void> => {

        let clicked: boolean = false;

        render(<React.Fragment>
            <AlertSecondaryButton
                type={ALERT_TYPE.INFO}
                text="test"
                onClick={() => clicked = true}
            />
        </React.Fragment>);

        screen.queryByText("test")!.click();

        expect(clicked).to.be.true;
    });
});
