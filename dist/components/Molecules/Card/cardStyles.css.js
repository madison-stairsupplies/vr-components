import { recipe } from "@vanilla-extract/recipes";
import { border, shadow, sprinkles } from "../../../sprinkles.css";
import { colors } from "../../Foundations/Colors/colors.css";
export var card = recipe({
    base: [
        sprinkles({
            borderRadius: "small",
        }),
        {
            height: "100%",
            background: "white",
        },
    ],
    variants: {
        variant: {
            shadow: {
                boxShadow: shadow.primary,
            },
            noShadow: {
                boxShadow: shadow.none,
            },
            fallBack: {
                background: colors.gray100,
            },
            disabled: {
                opacity: 0.5,
                cursor: "not-allowed",
                border: border.lightGray,
            },
        },
        background: {
            white: sprinkles({ background: "white" }),
        },
        clickable: {
            none: {},
            clickable: [
                sprinkles({
                    background: {
                        hover: "gray100",
                    },
                    cursor: "pointer",
                }),
            ],
        },
    },
    defaultVariants: {
        variant: "shadow",
        background: "white",
    },
});
export var cardContent = recipe({
    base: [
        {
            height: "100%",
            overflow: "clip",
        },
    ],
    // padding: 20,
    variants: {
        padding: {
            none: sprinkles({ padding: "none" }),
            xs: sprinkles({ padding: "xs" }),
            small: sprinkles({ padding: "small" }),
            medium: sprinkles({ padding: "medium" }),
            large: sprinkles({ padding: "large" }),
            xl: sprinkles({ padding: "xl" }),
            xxl: sprinkles({ padding: "xxl" }),
        },
        scroll: {
            none: {},
            scroll: {
                overflowY: "auto",
                maxHeight: "100%",
            },
        },
    },
    defaultVariants: {
        padding: "small",
        scroll: "none",
    },
});
