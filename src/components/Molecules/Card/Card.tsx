import { MouseEventHandler } from "react";
import {
    card,
    cardContent,
    CardContentVariants,
    CardVariants,
} from "./cardStyles.css";
import { Sprinkles, sprinkles } from "../../../sprinkles.css";
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
const cardStyles = (props: Omit<CardProps, "children">) => {
    const { sx, variant, clickable, ...rest } = props;
    return (
        sprinkles({ ...sx, background: rest.background }) +
        " " +
        card({ variant: variant, clickable: clickable })
    );
};

function Card(props: CardProps) {
    const { children, onClick, height, ...rest } = props;
    return (
        <div
            className={cardStyles(rest)}
            style={{ height: height }}
            onClick={onClick}
        >
            {props.children}
        </div>
    );
}

function CardContent(props: CardContentProps) {
    return (
        <div
            className={cardContent({ padding: props.padding, scroll: props.scroll })}
        >
            {props.children}
        </div>
    );
}

export { Card, CardContent };
