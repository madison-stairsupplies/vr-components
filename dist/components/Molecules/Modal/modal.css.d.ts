import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const overlay: string;
export declare const labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    [x: string]: {
        [x: string]: string | import("@vanilla-extract/css").ComplexStyleRule;
    };
}>;
export declare const buttonStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    background: {
        red: {
            background: string;
            color: string;
        };
        green: {
            background: string;
            color: string;
        };
        blue: {
            background: string;
            color: string;
        };
    };
}>;
export declare const modal: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>;
export declare const modalContainer: import("@vanilla-extract/recipes").RuntimeFn<{
    padding: {
        none: string;
        small: string;
        medium: string;
        large: string;
        xl: string;
        xxl: string;
    };
}>;
export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
export type ModalVariants = RecipeVariants<typeof modal>;
export type ModalContainerVariants = RecipeVariants<typeof modalContainer>;
