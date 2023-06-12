import { MouseEventHandler, useEffect, useRef, useState } from "react";
import {
    accordion,
    AccordionVariants,
    OpenbodyVariants,
    LabelStyleVariants,
    closedbodyStyle,
    openbodyStyle,
    labelStyle,
} from "./accordion.css";
import React from "react";
import Icon from "../../Foundations/Icons/Icons";

export interface AccordionProps {
    label: string;
    children: React.ReactNode;
    variant?: Pick<NonNullable<AccordionVariants>, "variant">["variant"];
    textTransform?: Pick<
        NonNullable<AccordionVariants>,
        "textTransform"
    >["textTransform"];
    size?: Pick<NonNullable<OpenbodyVariants>, "size">["size"];
    background?: Pick<
        NonNullable<LabelStyleVariants>,
        "background"
    >["background"];
    position?: Pick<NonNullable<OpenbodyVariants>, "position">["position"];
    border?: Pick<NonNullable<OpenbodyVariants>, "border">["border"];
    labelWidth?: string;
    inputKey: string;
}

export default function Accordion(props: AccordionProps) {
    const {
        label,
        children,
        variant,
        size,
        background,
        position,
        border,
        labelWidth,
        inputKey,
        textTransform,
    } = props;

    //const [accordionOpen, setAccordionOpen] = useState({ approvalId: " " || 0 || undefined, open: false });

    const [moreActionsOpen, setMoreActionsOpen] = useState({
        open: false,
        approvalId: "",
    });

    const ref = useRef(null);

    const handleClickOutside = () => {
        if (ref.current) {
            setMoreActionsOpen({ open: false, approvalId: "" });
        }
    };
    useEffect(() => {
        document.addEventListener(
            "click",
            handleClickOutside,
            !moreActionsOpen.open
        );

        return () => {
            document.removeEventListener(
                "click",
                handleClickOutside,
                !moreActionsOpen.open
            );
        };
    });

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.keyCode === 27) {
                setMoreActionsOpen({ open: false, approvalId: "" });
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    return (
        <div
            style={{
                width: `${labelWidth}`,
                display: "flex",
                alignItems: "center",
                position: "relative",
            }}
            className={accordion({
                variant: variant,
            })}
            ref={ref}
        >
            <div
                onClick={() => {
                    setMoreActionsOpen({
                        open: !moreActionsOpen.open,
                        approvalId: inputKey,
                    });
                }}
                className={labelStyle({ background: background })}
            >
                {label === "more" ? <Icon variant="more" /> : label}
            </div>
            {moreActionsOpen.open ? (
                <div
                    className={openbodyStyle({
                        position: position,
                        border: border,
                        size: size,
                    })}
                >
                    {children}
                </div>
            ) : (
                <div className={closedbodyStyle}></div>
            )}
        </div>
    );
}
