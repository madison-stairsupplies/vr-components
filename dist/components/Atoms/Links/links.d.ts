import React from "react";
import { linkVariants } from "./links.css";
export interface linkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: Pick<NonNullable<linkVariants>, "variant">["variant"];
    forwardLink?: string;
}
export default function Link(props: linkProps): React.JSX.Element;
