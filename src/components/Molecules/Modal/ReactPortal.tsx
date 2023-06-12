import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
    wrapperId: string;
    children: React.ReactNode;
}
export default function ReactPortal(props: ReactPortalProps) {
    const { wrapperId, children } = props;
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
        null
    );

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }

        setWrapperElement(element);
        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);

    document.body.appendChild(wrapperElement);
    return wrapperElement;
}
