import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function ReactPortal(props) {
    var wrapperId = props.wrapperId, children = props.children;
    var _a = useState(null), wrapperElement = _a[0], setWrapperElement = _a[1];
    useLayoutEffect(function () {
        var element = document.getElementById(wrapperId);
        var systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
        return function () {
            if (systemCreated && (element === null || element === void 0 ? void 0 : element.parentNode)) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);
    if (!wrapperElement)
        return null;
    return createPortal(children, wrapperElement);
}
function createWrapperAndAppendToBody(wrapperId) {
    var wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}
