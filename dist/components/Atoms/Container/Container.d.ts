import React from "react";
import { Sprinkles } from "../../../sprinkles.css";
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
export default function Container(props: ContainerProps): React.JSX.Element;
export {};
