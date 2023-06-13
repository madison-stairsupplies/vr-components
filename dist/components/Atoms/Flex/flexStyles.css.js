import { recipe } from "@vanilla-extract/recipes";
import { calc } from "@vanilla-extract/css-utils";
import { gap } from "../../../sprinkles.css";
export var gapRecipe = recipe({
    variants: {
        container: {
            xs: {
                width: calc.add("100%", "".concat(gap.xs)),
                margin: "-".concat(gap.xs, "px 0 0 -").concat(gap.xs, "px"),
            },
            sm: {
                width: calc.add("100%", "".concat(gap.sm)),
                margin: "-".concat(gap.sm, "px 0 0 -").concat(gap.sm, "px"),
            },
            md: {
                width: calc.add("100%", "".concat(gap.md, "px")),
                margin: "-".concat(gap.md, "px 0 0 -").concat(gap.md, "px"),
            },
            lg: {
                width: calc.add("100%", "".concat(gap.lg, "px")),
                margin: "-".concat(gap.lg, "px 0 0 -").concat(gap.lg, "px"),
            },
            xl: {
                width: calc.add("100%", "".concat(gap.xl, "px")),
                margin: "-".concat(gap.xl, "px 0 0 -").concat(gap.xl, "px"),
            },
            xxl: {
                width: calc.add("100%", "".concat(gap.xxl, "px")),
                margin: "-".concat(gap.xxl, "px 0 0 -").concat(gap.xxl, "px"),
            },
        },
        item: {
            xs: {
                padding: "".concat(gap.xs, "px 0 0 ").concat(gap.xs, "px"),
            },
            sm: {
                padding: "".concat(gap.sm, "px 0 0 ").concat(gap.sm, "px"),
            },
            md: {
                padding: "".concat(gap.md, "px 0 0 ").concat(gap.md, "px"),
            },
            lg: {
                padding: "".concat(gap.lg, "px 0 0 ").concat(gap.lg, "px"),
            },
            xl: {
                padding: "".concat(gap.xl, "px 0 0 ").concat(gap.xl, "px"),
            },
            xxl: {
                padding: "".concat(gap.xxl, "px 0 0 ").concat(gap.xxl, "px"),
            },
        },
    },
});
