import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const list: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        p: string;
        pxs: {
            fontSize: "11.5px";
        };
    };
    color: {
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
    bold: {
        bold: string;
    };
    textAlign: {
        right: string;
        center: string;
        left: string;
        justify: string;
    };
}>;
export type ListVariants = RecipeVariants<typeof list>;
