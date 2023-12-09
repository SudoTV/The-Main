/**
 * @author WMXPY
 * @description OpenGraph Image
 */

import { ImageResponse } from "next/og";
import { BiSolidChevronRight } from "react-icons/bi";

export const alt = "SudoTV";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <BiSolidChevronRight
                    size={144}
                />
                SudoTV
            </div>
        ),
        {
            ...size,
        },
    );
}