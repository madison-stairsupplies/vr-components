import React from "react";
import { ButtonVariants } from "./button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: Pick<NonNullable<ButtonVariants>, "variant">["variant"];
    radius?: Pick<NonNullable<ButtonVariants>, "radius">["radius"];
    textTransform?: Pick<NonNullable<ButtonVariants>, "textTransform">["textTransform"];
    size?: Pick<NonNullable<ButtonVariants>, "size">["size"];
    submitting?: boolean;
}
export default function Button(props: ButtonProps): React.JSX.Element;
