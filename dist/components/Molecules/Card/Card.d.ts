import { MouseEventHandler } from "react";
import { CardContentVariants, CardVariants } from "./cardStyles.css";
import { Sprinkles } from "../../../sprinkles.css";
import React from "react";
interface CardProps {
    sx?: Sprinkles;
    children: React.ReactNode;
    background?: Sprinkles["color"];
    variant?: Pick<NonNullable<CardVariants>, "variant">["variant"];
    clickable?: Pick<NonNullable<CardVariants>, "clickable">["clickable"];
    height?: string;
    onClick?: MouseEventHandler;
    className?: string;
}
interface CardContentProps {
    sx?: Sprinkles;
    children: React.ReactNode;
    padding?: Pick<NonNullable<CardContentVariants>, "padding">["padding"];
    scroll?: Pick<NonNullable<CardContentVariants>, "scroll">["scroll"];
}
declare function Card(props: CardProps): React.JSX.Element;
declare function CardContent(props: CardContentProps): React.JSX.Element;
export { Card, CardContent };
