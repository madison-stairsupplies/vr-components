import { TypographyVariants } from "./typography.css";
import { Sprinkles } from "../../../sprinkles.css";
import React from "react";
interface TypographyProps {
    variant?: Pick<NonNullable<TypographyVariants>, "variant">["variant"];
    children?: string | React.ReactNode;
    color?: Pick<NonNullable<TypographyVariants>, "color">["color"];
    sx?: Sprinkles;
    bold?: Pick<NonNullable<TypographyVariants>, "bold">["bold"];
    textAlign?: Pick<NonNullable<TypographyVariants>, "textAlign">["textAlign"];
}
export default function Typography(props: TypographyProps): React.JSX.Element;
export {};
