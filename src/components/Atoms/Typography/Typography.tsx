import { TypographyVariants, typography } from "./typography.css";
import { Sprinkles, sprinkles } from "../../../sprinkles.css";
import React from "react";

interface TypographyProps {
    variant?: Pick<NonNullable<TypographyVariants>, "variant">["variant"];
    children?: string | React.ReactNode;
    color?: Pick<NonNullable<TypographyVariants>, "color">["color"];
    sx?: Sprinkles;
    bold?: Pick<NonNullable<TypographyVariants>, "bold">["bold"];
    textAlign?: Pick<NonNullable<TypographyVariants>, "textAlign">["textAlign"];
}
export default function Typography(props: TypographyProps) {
    const { sx, children, color, variant, bold, textAlign, ...rest } = props;

    return (
        <>
            <p
                {...rest}
                className={
                    sprinkles({ color: color, ...sx }) +
                    typography({ variant: variant, bold: bold, textAlign: textAlign })
                }
            >
                {children}
            </p>
        </>
    );
}
