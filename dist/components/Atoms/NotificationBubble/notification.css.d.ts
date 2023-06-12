import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const notification: import("@vanilla-extract/recipes").RuntimeFn<{
    color: {
        blue: {
            background: string;
            color: string;
        };
        red: {
            background: "#c21807";
            color: string;
        };
    };
}>;
export type NotificationVariants = RecipeVariants<typeof notification>;
