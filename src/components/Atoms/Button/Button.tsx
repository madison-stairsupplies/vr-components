import React from "react";
import { button, ButtonVariants } from "./button.css";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: Pick<NonNullable<ButtonVariants>, "variant">["variant"];
    radius?: Pick<NonNullable<ButtonVariants>, "radius">["radius"];
    textTransform?: Pick<
        NonNullable<ButtonVariants>,
        "textTransform"
    >["textTransform"];
    size?: Pick<NonNullable<ButtonVariants>, "size">["size"];
    submitting?: boolean;
}

export default function Button(props: ButtonProps) {
    const {
        children,
        variant,
        radius,
        textTransform,
        size,
        submitting,
        ...rest
    } = props;

    return (
        <button
            {...rest}
            className={button({
                variant: variant,
                size: size,
                radius: radius,
                textTransform: textTransform,
            })}
        >
            {children}
        </button>
    );
}
