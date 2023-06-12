import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../sprinkles.css";

export const link = recipe({
    base: [
        sprinkles({
            cursor: { disabled: "not-allowed" },
            outline: { focus: "none" },
        }),
    ],

    variants: {
        variant: {
            link: [
                sprinkles({
                    color: {
                        default: "vrBlue400",
                        hover: "vrBlue300",
                        disabled: "vrBlue100",
                        disabledHover: "vrBlue100",
                    },
                }),
            ],
            button: [
                sprinkles({
                    color: {
                        default: "black",
                        hover: "vrBlue300",
                        disabledHover: "gray100",
                    }, // will want to add on Hover to display a tool tip
                }),
            ],
        },
    },

    defaultVariants: {
        variant: "link",
    },
});

export type linkVariants = RecipeVariants<typeof link>;
