import { AccordionVariants, OpenbodyVariants, LabelStyleVariants } from "./accordion.css";
import React from "react";
export interface AccordionProps {
    label: string;
    children: React.ReactNode;
    variant?: Pick<NonNullable<AccordionVariants>, "variant">["variant"];
    textTransform?: Pick<NonNullable<AccordionVariants>, "textTransform">["textTransform"];
    size?: Pick<NonNullable<OpenbodyVariants>, "size">["size"];
    background?: Pick<NonNullable<LabelStyleVariants>, "background">["background"];
    position?: Pick<NonNullable<OpenbodyVariants>, "position">["position"];
    border?: Pick<NonNullable<OpenbodyVariants>, "border">["border"];
    labelWidth?: string;
    inputKey: string;
}
export default function Accordion(props: AccordionProps): React.JSX.Element;
