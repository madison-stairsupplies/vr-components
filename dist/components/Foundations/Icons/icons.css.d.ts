import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const icon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        10: {
            fontSize: "10px";
        };
        12: {
            fontSize: "12px";
        };
        16: {
            fontSize: "16px";
        };
        18: {
            fontSize: "18px";
        };
        20: {
            fontSize: "20px";
        };
        30: {
            fontSize: "30px";
        };
        40: {
            fontSize: "40px";
        };
        50: {
            fontSize: "50px";
        };
        60: {
            fontSize: "60px";
        };
        70: {
            fontSize: "70px";
        };
        80: {
            fontSize: "80px";
        };
    };
    colors: {
        transparent: string;
        white: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        black: string;
        vrBlue100: string;
        vrBlue200: string;
        vrBlue300: string;
        vrBlue400: string;
        vrBlue500: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
    };
    clickable: {
        none: {};
        clickable: string[];
    };
}>;
export type IconStyleVariants = RecipeVariants<typeof icon>;
