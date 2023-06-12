import React from "react";
import { gap, Sprinkles } from "../../../sprinkles.css";
type Cols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface FlexProps extends React.HTMLProps<HTMLDivElement> {
    container?: boolean;
    height?: string;
    item?: boolean;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    gap?: keyof typeof gap;
    column?: boolean;
    children?: React.ReactNode;
    sx?: Sprinkles;
    animation?: any;
}
export default function Flex(props: FlexProps): React.JSX.Element;
export {};
