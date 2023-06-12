import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const button: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        primary: string[];
        secondary: string[];
        tertiary: string[];
        quaternary: string[];
        clear: string[];
        white: string[];
        customer: (string | {
            padding: "8px 10px";
            fontFamily: "pragmatica-bold";
            textTransform: "uppercase";
            borderRadius: number;
            fontSize: "1.1rem";
        })[];
        customerMobile: (string | {
            fontFamily: "pragmatica-bold";
            textTransform: "uppercase";
            borderRadius: number;
            fontSize: "0.9rem";
        })[];
    };
    radius: {
        small: string;
        medium: string;
        rounded: string;
    };
    textTransform: {
        uppercase: string;
        capitalize: string;
        lowercase: string;
    };
    size: {
        xs: {
            width: "50px";
        };
        sm: {
            width: "100px";
        };
        md: {
            width: "150px";
        };
        lg: {
            width: "200px";
        };
        xl: {
            width: "250px";
        };
        full: {
            width: "100%";
        };
    };
}>;
export type ButtonVariants = RecipeVariants<typeof button>;
