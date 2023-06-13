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
import React from "react";
import { sprinkles } from "../../../sprinkles.css";
import { gapRecipe } from "./flexStyles.css";
export default function Flex(props) {
    function getStyles(p) {
        if (p.container) {
            return __assign({ boxSizing: "border-box", display: "flex", alignItems: "stretch", flexWrap: "wrap", flexDirection: p.column ? "column" : "row" }, (props.sx ? __assign({}, props.sx) : undefined));
        }
        if (p.item) {
            return __assign({ boxSizing: "border-box", flexBasis: {
                    mobile: p.sm,
                    tablet: p.md,
                    desktop: p.lg,
                }, maxWidth: {
                    mobile: p.sm,
                    tablet: p.md,
                    desktop: p.lg,
                } }, (props.sx ? __assign({}, props.sx) : undefined));
        }
        return {};
    }
    function getGapStyles(p) {
        if (p.container) {
            return gapRecipe({
                container: p.gap,
            });
        }
        if (p.item) {
            return gapRecipe({
                item: p.gap,
            });
        }
        return {};
    }
    var childrenWithProps = React.Children.map(props.children, function (child) {
        var item = child;
        if (React.isValidElement(child)) {
            return React.cloneElement(item, __assign(__assign({}, child.props), { gap: props.gap }));
        }
        return item;
    });
    return (<div style={{ height: props.height }} className={"".concat(getGapStyles(props), " + ").concat(sprinkles(getStyles(props)), " + ").concat(props.animation, " ")}>
            {childrenWithProps}
        </div>);
}
