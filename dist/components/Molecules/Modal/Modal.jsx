import React from "react";
import { modal, modalContainer, overlay, labelStyle, buttonStyle, } from "./modal.css";
import ReactPortal from "./ReactPortal";
function Modal(props) {
    var size = props.size, background = props.background, children = props.children, open = props.open, handleClose = props.handleClose, label = props.label;
    if (!props.open)
        return null;
    return (<ReactPortal wrapperId="react-portal-modal">
            <div className={overlay} onClick={function () { return handleClose(); }}>
                <div className={modal({ size: size })}>
                    <div className={labelStyle()} onClick={function (e) { return e.stopPropagation(); }}>
                        {label}
                        <button className={buttonStyle({ background: background })} onClick={function () { return handleClose(); }}>
                            X
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </ReactPortal>);
}
function ModalContainer(props) {
    var sx = props.sx, children = props.children, padding = props.padding;
    return (<div onClick={function (e) { return e.stopPropagation(); }} className={modalContainer({ padding: padding })}>
            {props.children}
        </div>);
}
export { Modal, ModalContainer };
