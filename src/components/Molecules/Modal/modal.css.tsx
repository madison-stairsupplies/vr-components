import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { colors } from "../../Foundations/Colors/colors.css";
import { sprinkles } from "../../../sprinkles.css";

export const overlay = style({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
    overflow: "clip",

    zIndex: 999,
    padding: "40px 20px 20px",
});

export const labelStyle = recipe({
    base: [
        {
            color: colors.black,
            display: "flex",
            justifyContent: "space-between",
            background: colors.gray200,
            padding: "10px 20px",
        },
    ],
});

export const buttonStyle = recipe({
    base: [
        {
            color: colors.black,
            justifyContent: "center",
            height: "25px",
            width: "25px",
            fontSize: "1rem",
            borderRadius: "50%",
            background: colors.gray200,
            ":hover": {
                cursor: "pointer",
            },
        },
    ],
    variants: {
        background: {
            red: { background: colors.red100, color: colors.white },
            green: { background: colors.green100, color: colors.white },
            blue: { background: colors.vrBlue500, color: colors.white },
        },
    },
    defaultVariants: {
        background: "blue",
    },
});

export const modal = recipe({
    base: {
        backgroundColor: "#fff",
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
    },
    variants: {
        size: {
            sm: sprinkles({ width: { mobile: 11, tablet: 11, desktop: 4 } }),
            md: sprinkles({ width: { mobile: 11, tablet: 11, desktop: 6 } }),
            lg: sprinkles({ width: { mobile: 11, tablet: 11, desktop: 9 } }),
            xl: sprinkles({ width: 11 }),
        },
    },
});

export const modalContainer = recipe({
    base: [
        {
            overflow: "hidden",
            background: "white",
            margin: "10px 5px 5px",
        },
    ],
    // padding: 20,
    variants: {
        padding: {
            none: sprinkles({ padding: "none" }),
            small: sprinkles({ padding: "small" }),
            medium: sprinkles({ padding: "medium" }),
            large: sprinkles({ padding: "large" }),
            xl: sprinkles({ padding: "xl" }),
            xxl: sprinkles({ padding: "xxl" }),
        },
    },
    defaultVariants: {
        padding: "small",
    },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
export type ModalVariants = RecipeVariants<typeof modal>;
export type ModalContainerVariants = RecipeVariants<typeof modalContainer>;
