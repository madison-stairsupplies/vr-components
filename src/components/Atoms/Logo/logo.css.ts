import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const logoStyle = recipe({
    variants: {
        size: {
            xs: {
                width: "33%",
            },
            sm: {
                width: "50%",
            },

            md: {
                width: "66%",
            },
            lg: {
                width: "100%",
            },
        },
    },

    defaultVariants: {
        size: "lg",
    },
});

export type LogoVariants = RecipeVariants<typeof logoStyle>;
