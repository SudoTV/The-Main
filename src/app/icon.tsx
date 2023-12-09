/**
 * @author WMXPY
 * @description Icon
 */

import { ImageResponse } from "next/og";
import { BiSolidChevronRight } from "react-icons/bi";

const sizeMap: Record<string, number> = {
    small: 48,
    medium: 96,
    large: 512,
};

export function generateImageMetadata() {
    return [
        {
            contentType: "image/png",
            size: {
                width: sizeMap.small,
                height: sizeMap.small,
            },
            id: "small",
        },
        {
            contentType: "image/png",
            size: {
                width: sizeMap.medium,
                height: sizeMap.medium,
            },
            id: "medium",
        },
        {
            contentType: "image/png",
            size: {
                width: sizeMap.large,
                height: sizeMap.large,
            },
            id: "large",
        },
    ];
}

type Props = {

    readonly id: string;
};

export default function Icon(props: Props): ImageResponse {

    const size: number = sizeMap[props.id];
    return new ImageResponse(
        <div
            style={{
                background: "transparent",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
            }}
        >
            <BiSolidChevronRight
                size={size}
            />
        </div>,
        {
            width: size,
            height: size,
        },
    );
}
