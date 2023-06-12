import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../sprinkles.css";
import { colors } from "../../Foundations/Colors/colors.css";
export const typography = recipe({
    variants: {
        variant: {
            h1: sprinkles({ fontSize: "2xl", lineHeight: "2xl" }),
            h2: sprinkles({ fontSize: "xl", lineHeight: "xl" }),
            h3: sprinkles({ fontSize: "lg", lineHeight: "lg" }),
            h4: sprinkles({ fontSize: "md", lineHeight: "md" }),
            h5: sprinkles({ fontSize: "sm", lineHeight: "sm" }),
            p: sprinkles({ fontSize: "xs", lineHeight: "sm" }),
            pxs: { fontSize: "11.5px" },
            pLine: sprinkles({ fontSize: "xs", lineHeight: "lg" }),
        },
        color: colors,
        bold: {
            bold: sprinkles({ fontWeight: 400 }),
        },
        textAlign: {
            right: sprinkles({ textAlign: "right" }),
            center: sprinkles({ textAlign: "center" }),
            left: sprinkles({ textAlign: "left" }),
            justify: sprinkles({ textAlign: "justify" }),
        },
    },
    defaultVariants: {
        textAlign: "left",
    },
});

export type TypographyVariants = RecipeVariants<typeof typography>;
