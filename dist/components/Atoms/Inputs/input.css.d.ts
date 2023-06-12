import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const fieldset: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        primary: {
            margin: "0px auto";
        };
        checkbox: {
            margin: "0px 0 0px 0";
        };
    };
}>;
export declare const labelStyle: string;
export declare const labelStyleLeft: string;
export declare const legendStyle: string;
export declare const textAreaStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    maxHeight: {
        xs: {
            maxHeight: "15px";
        };
        sm: {
            maxHeight: "30px";
        };
        md: {
            maxHeight: "40px";
        };
        lg: {
            maxHeight: "75px";
        };
        xl: {
            maxHeight: "100px";
        };
        xxl: {
            minHeight: "125px";
        };
    };
    textAreacursor: {
        pointer: string;
        text: string;
    };
}>;
export declare const input: import("@vanilla-extract/recipes").RuntimeFn<{
    textTransform: {
        uppercase: string;
        capitalize: string;
        lowercase: string;
    };
    type: {
        number: {}[];
        text: string;
        email: string[];
        password: string;
        checkbox: string[];
        checkboxLeft: (string | {
            justifyContent: "flex-start";
        })[];
        textarea: string[];
    };
    inputCursor: {
        pointer: string;
        text: string;
    };
}>;
export type InputVariants = RecipeVariants<typeof input>;
export type FieldsetVariants = RecipeVariants<typeof fieldset>;
export type TextAreaStyleVariants = RecipeVariants<typeof textAreaStyle>;
