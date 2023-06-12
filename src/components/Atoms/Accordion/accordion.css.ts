import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { colors } from "../../Foundations/Colors/colors.css";
import { fontSize, sprinkles } from "../../../sprinkles.css";

export const labelStyle = recipe({
    base: [
        {
            color: colors.black,
            textTransform: "capitalize",
            fontSize: fontSize.lg,
            textAlign: "center",
            ":hover": {
                cursor: "pointer",
                color: colors.vrBlue400,
            },
        },
    ],
    variants: {
        background: {
            white: {
                // background: colors.white,
            },
            gray: {
                background: colors.gray200,
            },
        },
    },
    defaultVariants: {
        background: "gray",
    },
});

export const closedbodyStyle = style({
    display: "none",
});

export const openbodyStyle = recipe({
    base: [
        {
            height: "100%",
            color: "black",
            padding: "10px 20px",
            background: colors.white,
            display: "grid",
        },
    ],
    variants: {
        size: {
            xs: {
                width: "50px",
                right: "-25%",
            },
            sm: {
                width: "100px",
            },
            md: {
                width: "200px",
                right: "50%",
            },
            lg: {
                width: "300px",
                right: "100%",
            },
            full: {
                width: "100%",
            },
        },
        position: {
            relative: {
                position: "relative",
            },
            absolute: {
                position: "absolute",
                height: "auto",
                left: "-50px",
                top: "40px",
                margin: "0 50% 0 0 ",
                zIndex: 999,
            },
        },
        border: {
            none: [
                sprinkles({
                    border: "none",
                }),
            ],
            solid: [
                sprinkles({
                    border: "solid",
                }),
            ],
            lightGray: [
                sprinkles({
                    border: "lightGray",
                }),
            ],
        },
    },
    defaultVariants: {
        size: "full",
        position: "relative",
        border: "none",
    },
});

export const accordion = recipe({
    base: [
        {
            position: "relative",
        },
        sprinkles({
            cursor: { disabled: "not-allowed" },
            outline: { focus: "none" },
        }),
    ],

    variants: {
        variant: {
            card: {
                width: "100%",
            },
            button: {},
        },
        textTransform: {
            uppercase: sprinkles({ textTransform: "uppercase" }),
            capitalize: sprinkles({ textTransform: "capitalize" }),
            lowercase: sprinkles({ textTransform: "lowercase" }),
        },
    },

    defaultVariants: {
        variant: "card",
        textTransform: "capitalize",
    },
});

export type AccordionVariants = RecipeVariants<typeof accordion>;
export type OpenbodyVariants = RecipeVariants<typeof openbodyStyle>;
export type LabelStyleVariants = RecipeVariants<typeof labelStyle>;
