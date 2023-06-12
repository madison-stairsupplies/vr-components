import { recipe } from "@vanilla-extract/recipes";
import { calc } from "@vanilla-extract/css-utils";
import { gap } from "../../../sprinkles.css";

export const gapRecipe = recipe({
    variants: {
        container: {
            xs: {
                width: calc.add("100%", `${gap.xs}`),
                margin: `-${gap.xs}px 0 0 -${gap.xs}px`,
            },

            sm: {
                width: calc.add("100%", `${gap.sm}`),
                margin: `-${gap.sm}px 0 0 -${gap.sm}px`,
            },
            md: {
                width: calc.add("100%", `${gap.md}px`),
                margin: `-${gap.md}px 0 0 -${gap.md}px`,
            },
            lg: {
                width: calc.add("100%", `${gap.lg}px`),
                margin: `-${gap.lg}px 0 0 -${gap.lg}px`,
            },
            xl: {
                width: calc.add("100%", `${gap.xl}px`),
                margin: `-${gap.xl}px 0 0 -${gap.xl}px`,
            },
            xxl: {
                width: calc.add("100%", `${gap.xxl}px`),
                margin: `-${gap.xxl}px 0 0 -${gap.xxl}px`,
            },
        },
        item: {
            xs: {
                padding: `${gap.xs}px 0 0 ${gap.xs}px`,
            },
            sm: {
                padding: `${gap.sm}px 0 0 ${gap.sm}px`,
            },
            md: {
                padding: `${gap.md}px 0 0 ${gap.md}px`,
            },
            lg: {
                padding: `${gap.lg}px 0 0 ${gap.lg}px`,
            },
            xl: {
                padding: `${gap.xl}px 0 0 ${gap.xl}px`,
            },
            xxl: {
                padding: `${gap.xxl}px 0 0 ${gap.xxl}px`,
            },
        },
    },
});
