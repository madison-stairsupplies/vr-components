import React from "react";
import { ModalContainerVariants, ButtonVariants } from "./modal.css";
import { Sprinkles } from "../../../sprinkles.css";
interface ModalProps {
    size?: "sm" | "md" | "lg" | "xl";
    background?: Pick<NonNullable<ButtonVariants>, "background">["background"];
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    label: string;
}
interface ModalContainerProps {
    sx?: Sprinkles;
    children: React.ReactNode;
    padding?: Pick<NonNullable<ModalContainerVariants>, "padding">["padding"];
}
declare function Modal(props: ModalProps): React.JSX.Element | null;
declare function ModalContainer(props: ModalContainerProps): React.JSX.Element;
export { Modal, ModalContainer };
