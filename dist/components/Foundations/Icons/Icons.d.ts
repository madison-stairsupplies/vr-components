import { IconStyleVariants } from "./icons.css";
import React from "react";
import { Sprinkles } from "../../../sprinkles.css";
export type IconVariants = "dashboard" | "check" | "home" | "trash" | "search" | "builder" | "pdf" | "email" | "stairs" | "edit" | "dot" | "send" | "pending" | "complete" | "list" | "copy" | "bug" | "logout" | "cart" | "rightArrow" | "leftArrow" | "more" | "upArrow" | "downArrow" | "bank" | "location" | "addImage" | "deleteImage" | "upload" | "download" | "phone" | "circleArrowLeft" | "circleArrowRight";
interface Props {
    variant: IconVariants;
    size?: Pick<NonNullable<IconStyleVariants>, "size">["size"];
    color?: string;
    clickable?: Pick<NonNullable<IconStyleVariants>, "clickable">["clickable"];
    sx?: Sprinkles;
    children?: React.ReactNode;
    tooltip?: string;
}
export default function Icon(props: Props): React.JSX.Element;
export {};
