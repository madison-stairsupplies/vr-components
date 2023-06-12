import { ListVariants, list } from "./list.css";
import { Sprinkles, sprinkles } from "../../../sprinkles.css";
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
export default function Typography(props: TypographyProps) {
    const {
        sx,
        children,
        color,
        variant,
        bold,
        textAlign,
        listContainer,
        listText,
        ...rest
    } = props;

    return (
        <>
            {listText ? (
                <li
                    {...rest}
                    className={
                        sprinkles({ ...sx }) +
                        list({ variant: variant, bold: bold, textAlign: textAlign })
                    }
                >
                    {children}
                </li>
            ) : (
                <ul style={{ listStyleType: "disc", padding: "1rem 3rem" }}>
                    {children}
                </ul>
            )}
        </>
    );
}
