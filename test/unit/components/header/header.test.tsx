/**
 * @author WMXPY
 * @namespace Components_Header
 * @description Header
 * @override Unit Test
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import * as React from "react";
import { LayoutHeader } from "../../../../src/components/header/header";

describe("Given Components <LayoutHeader> Component", (): void => {

    it("should be able to render sudo-tv title", async (): Promise<void> => {

        render(<React.Fragment>
            <LayoutHeader
                locale={IETF_LOCALE.ENGLISH_UNITED_STATES}
            />
        </React.Fragment>);

        expect(screen.queryByText("SudoTV")).to.be.exist;
    });
});
