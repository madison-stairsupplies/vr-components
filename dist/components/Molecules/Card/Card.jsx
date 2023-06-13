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
import { card, cardContent, } from "./cardStyles.css";
import { sprinkles } from "../../../sprinkles.css";
import React from "react";
var cardStyles = function (props) {
    var sx = props.sx, variant = props.variant, clickable = props.clickable, rest = __rest(props, ["sx", "variant", "clickable"]);
    return (sprinkles(__assign(__assign({}, sx), { background: rest.background })) +
        " " +
        card({ variant: variant, clickable: clickable }));
};
function Card(props) {
    var children = props.children, onClick = props.onClick, height = props.height, rest = __rest(props, ["children", "onClick", "height"]);
    return (<div className={cardStyles(rest)} style={{ height: height }} onClick={onClick}>
            {props.children}
        </div>);
}
function CardContent(props) {
    return (<div className={cardContent({ padding: props.padding, scroll: props.scroll })}>
            {props.children}
        </div>);
}
export { Card, CardContent };
