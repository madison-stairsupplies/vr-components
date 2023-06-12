import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const card: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        shadow: {
            boxShadow: string;
        };
        noShadow: {
            boxShadow: string;
        };
        fallBack: {
            background: string;
        };
        disabled: {
            opacity: number;
            cursor: "not-allowed";
            border: string;
        };
    };
    background: {
        white: string;
    };
    clickable: {
        none: {};
        clickable: string[];
    };
}>;
export declare const cardContent: import("@vanilla-extract/recipes").RuntimeFn<{
    padding: {
        none: string;
        xs: string;
        small: string;
        medium: string;
        large: string;
        xl: string;
        xxl: string;
    };
    scroll: {
        none: {};
        scroll: {
            overflowY: "auto";
            maxHeight: "100%";
        };
    };
}>;
export type CardVariants = RecipeVariants<typeof card>;
export type CardContentVariants = RecipeVariants<typeof cardContent>;
