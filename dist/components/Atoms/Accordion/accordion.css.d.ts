import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    background: {
        white: {};
        gray: {
            background: string;
        };
    };
}>;
export declare const closedbodyStyle: string;
export declare const openbodyStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: {
            width: "50px";
            right: "-25%";
        };
        sm: {
            width: "100px";
        };
        md: {
            width: "200px";
            right: "50%";
        };
        lg: {
            width: "300px";
            right: "100%";
        };
        full: {
            width: "100%";
        };
    };
    position: {
        relative: {
            position: "relative";
        };
        absolute: {
            position: "absolute";
            height: "auto";
            left: "-50px";
            top: "40px";
            margin: "0 50% 0 0 ";
            zIndex: number;
        };
    };
    border: {
        none: string[];
        solid: string[];
        lightGray: string[];
    };
}>;
export declare const accordion: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        card: {
            width: "100%";
        };
        button: {};
    };
    textTransform: {
        uppercase: string;
        capitalize: string;
        lowercase: string;
    };
}>;
export type AccordionVariants = RecipeVariants<typeof accordion>;
export type OpenbodyVariants = RecipeVariants<typeof openbodyStyle>;
export type LabelStyleVariants = RecipeVariants<typeof labelStyle>;
