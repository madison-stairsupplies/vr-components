import React from "react";
import {
    modal,
    ModalVariants,
    modalContainer,
    ModalContainerVariants,
    overlay,
    labelStyle,
    buttonStyle,
    ButtonVariants,
} from "./modal.css";
import ReactPortal from "./ReactPortal";
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

function Modal(props: ModalProps) {
    const { size, background, children, open, handleClose, label } = props;
    if (!props.open) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal">
            <div className={overlay} onClick={() => handleClose()}>
                <div className={modal({ size: size })}>
                    <div className={labelStyle()} onClick={(e) => e.stopPropagation()}>
                        {label}
                        <button
                            className={buttonStyle({ background: background })}
                            onClick={() => handleClose()}
                        >
                            X
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </ReactPortal>
    );
}

function ModalContainer(props: ModalContainerProps) {
    const { sx, children, padding } = props;
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={modalContainer({ padding: padding })}
        >
            {props.children}
        </div>
    );
}

export { Modal, ModalContainer };
