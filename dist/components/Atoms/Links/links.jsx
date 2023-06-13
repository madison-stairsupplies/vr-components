var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { link } from "./links.css";
export default function Link(props) {
    var children = props.children, variant = props.variant, forwardLink = props.forwardLink, rest = __rest(props, ["children", "variant", "forwardLink"]);
    return (<>
            {variant === "button" ? (<button {...rest} className={link({ variant: variant })}>
                    {children}
                </button>) : (<a href={forwardLink} className={link({ variant: variant })}>
                    {children}
                </a>)}
        </>);
}
