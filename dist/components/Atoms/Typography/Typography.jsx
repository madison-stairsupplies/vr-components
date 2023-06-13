var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { typography } from "./typography.css";
import { sprinkles } from "../../../sprinkles.css";
import React from "react";
export default function Typography(props) {
    var sx = props.sx, children = props.children, color = props.color, variant = props.variant, bold = props.bold, textAlign = props.textAlign, rest = __rest(props, ["sx", "children", "color", "variant", "bold", "textAlign"]);
    return (<>
            <p {...rest} className={sprinkles(__assign({ color: color }, sx)) +
            typography({ variant: variant, bold: bold, textAlign: textAlign })}>
                {children}
            </p>
        </>);
}
