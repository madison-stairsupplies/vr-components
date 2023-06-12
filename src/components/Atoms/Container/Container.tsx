import React from "react";
import { Sprinkles, sprinkles } from "../../../sprinkles.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    background?: Sprinkles["color"];
    width?: Sprinkles["width"];
    maxWidth?: Sprinkles["width"];
    minHeight?: string;
    padding?: Sprinkles["padding"];
    margin?: Sprinkles["padding"];
    sx?: Sprinkles;
    height?: string;
}

export default function Container(props: ContainerProps) {
    const { sx, children, className, ...rest } = props;
    return (
        <div
            className={sprinkles({
                background: rest.background,
                width: rest.width,
                padding: rest.padding,
                maxWidth: rest.maxWidth,
                margin: rest.margin,
                ...sx,
            })}
            style={{ height: rest.height, minHeight: rest.minHeight }}
        >
            {children}
        </div>
    );
}
