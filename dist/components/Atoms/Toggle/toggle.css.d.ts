import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const toggle: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        checked: {
            background: string;
            color: string;
            border: `3px solid ${string}`;
        };
        notChecked: {
            background: string;
            color: "#a4a4a4";
        };
    };
}>;
export declare const divStyle: string;
export type ToggleVariants = RecipeVariants<typeof toggle>;
