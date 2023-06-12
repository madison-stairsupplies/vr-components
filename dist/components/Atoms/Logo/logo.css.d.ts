import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const logoStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: {
            width: "33%";
        };
        sm: {
            width: "50%";
        };
        md: {
            width: "66%";
        };
        lg: {
            width: "100%";
        };
    };
}>;
export type LogoVariants = RecipeVariants<typeof logoStyle>;
