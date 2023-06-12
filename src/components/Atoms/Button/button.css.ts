import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../sprinkles.css";

export const button = recipe({
    base: [
        sprinkles({
            paddingX: "large",
            paddingY: "small",
            cursor: { disabled: "not-allowed" },
            outline: { focus: "none" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }),
        {
            padding: "5px 10px",
        },
    ],

    variants: {
        variant: {
            primary: [
                sprinkles({
                    background: {
                        default: "vrBlue400",
                        hover: "vrBlue300",
                        disabled: "gray200",
                        disabledHover: "vrBlue100",
                    },
                    color: "white",
                    boxShadow: { default: "primary", disabled: "none" },
                }),
            ],
            secondary: [
                sprinkles({
                    background: {
                        default: "gray200",
                        hover: "gray100",
                        disabledHover: "gray100",
                    },
                    color: { default: "gray400", disabled: "gray200" },
                    boxShadow: { default: "tertiary", disabled: "none" },
                }),
            ],
            tertiary: [
                sprinkles({
                    background: {
                        default: "red400",
                        hover: "red300",
                        disabled: "red100",
                        disabledHover: "red100",
                    },
                    color: "white",
                }),
            ],
            quaternary: [
                sprinkles({
                    background: {
                        default: "green400",
                        hover: "green300",
                        disabled: "green100",
                        disabledHover: "green100",
                    },
                    color: "white",
                }),
            ],
            clear: [
                sprinkles({
                    background: {
                        default: "transparent",
                        hover: "transparent",
                        disabled: "transparent",
                        disabledHover: "transparent",
                    },
                    color: "black",
                }),
            ],
            white: [
                sprinkles({
                    background: {
                        default: "white",
                        hover: "white",
                        disabled: "white",
                        disabledHover: "white",
                    },
                    color: "black",
                }),
            ],
            customer: [
                sprinkles({
                    background: {
                        default: "vrBlue400",
                        hover: "vrBlue300",
                        disabled: "gray200",
                        disabledHover: "vrBlue100",
                    },

                    color: "white",
                    boxShadow: { default: "primary", disabled: "none" },
                }),
                {
                    padding: "8px 10px",
                    fontFamily: "pragmatica-bold",
                    textTransform: "uppercase",
                    borderRadius: 0,
                    fontSize: "1.1rem",
                },
            ],
            customerMobile: [
                sprinkles({
                    background: {
                        default: "vrBlue400",
                        hover: "vrBlue300",
                        disabled: "gray200",
                        disabledHover: "vrBlue100",
                    },

                    color: "white",
                    boxShadow: { default: "primary", disabled: "none" },
                }),
                {
                    fontFamily: "pragmatica-bold",
                    textTransform: "uppercase",
                    borderRadius: 0,
                    fontSize: "0.9rem",
                },
            ],
        },
        radius: {
            small: sprinkles({ borderRadius: "small" }),
            medium: sprinkles({ borderRadius: "medium" }),
            rounded: sprinkles({ borderRadius: "rounded" }),
        },
        textTransform: {
            uppercase: sprinkles({ textTransform: "uppercase" }),
            capitalize: sprinkles({ textTransform: "capitalize" }),
            lowercase: sprinkles({ textTransform: "lowercase" }),
        },
        size: {
            xs: {
                width: "50px",
            },
            sm: {
                width: "100px",
            },
            md: {
                width: "150px",
            },
            lg: {
                width: "200px",
            },
            xl: {
                width: "250px",
            },
            full: {
                width: "100%",
            },
        },
    },

    defaultVariants: {
        variant: "primary",
        radius: "small",
        textTransform: "capitalize",
    },
});

export type ButtonVariants = RecipeVariants<typeof button>;
