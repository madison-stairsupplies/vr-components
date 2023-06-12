import React from "react";
import { link, linkVariants } from "./links.css";

export interface linkProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: Pick<NonNullable<linkVariants>, "variant">["variant"];
    forwardLink?: string;
}

export default function Link(props: linkProps) {
    const { children, variant, forwardLink, ...rest } = props;
    return (
        <>
            {variant === "button" ? (
                <button {...rest} className={link({ variant: variant })}>
                    {children}
                </button>
            ) : (
                <a href={forwardLink} className={link({ variant: variant })}>
                    {children}
                </a>
            )}
        </>
    );
}
