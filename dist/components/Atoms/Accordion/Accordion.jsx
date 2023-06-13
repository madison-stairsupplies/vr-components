import { useEffect, useRef, useState } from "react";
import { accordion, closedbodyStyle, openbodyStyle, labelStyle, } from "./accordion.css";
import React from "react";
import Icon from "../../Foundations/Icons/Icons";
export default function Accordion(props) {
    var label = props.label, children = props.children, variant = props.variant, size = props.size, background = props.background, position = props.position, border = props.border, labelWidth = props.labelWidth, inputKey = props.inputKey, textTransform = props.textTransform;
    //const [accordionOpen, setAccordionOpen] = useState({ approvalId: " " || 0 || undefined, open: false });
    var _a = useState({
        open: false,
        approvalId: "",
    }), moreActionsOpen = _a[0], setMoreActionsOpen = _a[1];
    var ref = useRef(null);
    var handleClickOutside = function () {
        if (ref.current) {
            setMoreActionsOpen({ open: false, approvalId: "" });
        }
    };
    useEffect(function () {
        document.addEventListener("click", handleClickOutside, !moreActionsOpen.open);
        return function () {
            document.removeEventListener("click", handleClickOutside, !moreActionsOpen.open);
        };
    });
    useEffect(function () {
        var close = function (e) {
            if (e.keyCode === 27) {
                setMoreActionsOpen({ open: false, approvalId: "" });
            }
        };
        window.addEventListener("keydown", close);
        return function () { return window.removeEventListener("keydown", close); };
    }, []);
    return (<div style={{
            width: "".concat(labelWidth),
            display: "flex",
            alignItems: "center",
            position: "relative",
        }} className={accordion({
            variant: variant,
        })} ref={ref}>
            <div onClick={function () {
            setMoreActionsOpen({
                open: !moreActionsOpen.open,
                approvalId: inputKey,
            });
        }} className={labelStyle({ background: background })}>
                {label === "more" ? <Icon variant="more"/> : label}
            </div>
            {moreActionsOpen.open ? (<div className={openbodyStyle({
                position: position,
                border: border,
                size: size,
            })}>
                    {children}
                </div>) : (<div className={closedbodyStyle}></div>)}
        </div>);
}
