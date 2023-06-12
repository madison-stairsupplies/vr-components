import { ListVariants } from "./list.css";
import { Sprinkles } from "../../../sprinkles.css";
import React from "react";
interface TypographyProps {
    variant?: Pick<NonNullable<ListVariants>, "variant">["variant"];
    children?: string | React.ReactNode;
    color?: Pick<NonNullable<ListVariants>, "color">["color"];
    sx?: Sprinkles;
    bold?: Pick<NonNullable<ListVariants>, "bold">["bold"];
    textAlign?: Pick<NonNullable<ListVariants>, "textAlign">["textAlign"];
    listContainer?: boolean;
    listText?: boolean;
}
export default function Typography(props: TypographyProps): React.JSX.Element;
export {};
