var _a;
import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { colors } from "../../Foundations/Colors/colors.css";
import { fontSize, shadow, sprinkles } from "../../../sprinkles.css";
export var fieldset = recipe({
    base: [
        {
            position: "relative",
            padding: "5px",
            textTransform: "capitalize",
            background: colors.gray100,
            borderRadius: "5px",
            border: "1px solid transparent",
            // maxHeight: "40px",
            // border: "1px solid red",
            display: "flex",
            height: "68%",
            ":hover": {
                border: "1px solid ".concat(colors.gray300),
                boxShadow: shadow.none,
            },
            ":focus-within": {
                border: "2px solid ".concat(colors.gray400),
            },
        },
    ],
    variants: {
        variant: {
            primary: {
                margin: "0px auto",
            },
            checkbox: {
                margin: "0px 0 0px 0",
            },
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
export var labelStyle = style({
    color: colors.gray500,
    marginLeft: "6px",
    textTransform: "capitalize",
    fontSize: fontSize.sm,
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
});
export var labelStyleLeft = style({
    color: colors.gray500,
    marginLeft: "0px",
    marginRight: "6px",
    textTransform: "capitalize",
    fontSize: fontSize.sm,
    display: "flex",
    width: "100%",
});
export var legendStyle = style({
    position: "relative",
    top: "-10px",
    left: "15px",
    display: "none",
    margin: "0 auto",
    padding: "1px 5px",
    borderRadius: "5px",
    background: "grey",
    fontSize: "small",
    color: "white",
    zIndex: 999,
    overflowWrap: "break-word",
    selectors: (_a = {},
        _a["".concat(labelStyle, ":hover &")] = {
            display: "flex",
        },
        _a),
});
export var textAreaStyle = recipe({
    base: [
        {
            position: "relative",
            padding: "0 5px",
            background: colors.gray100,
            borderRadius: "5px",
            border: "2px solid transparent",
            height: "100%",
            width: "100%",
            display: "flex",
            fontSize: "0.9rem",
        },
    ],
    variants: {
        maxHeight: {
            xs: { maxHeight: "15px" },
            sm: { maxHeight: "30px" },
            md: { maxHeight: "40px" },
            lg: { maxHeight: "75px" },
            xl: { maxHeight: "100px" },
            xxl: { minHeight: "125px" },
        },
        textAreacursor: {
            pointer: sprinkles({
                cursor: { disabled: "not-allowed" },
                background: "transparent",
            }),
            text: sprinkles({
                cursor: { disabled: "text" },
                background: "transparent",
            }),
        },
    },
    defaultVariants: {
        maxHeight: "lg",
        textAreacursor: "pointer",
    },
});
export var input = recipe({
    base: [
        sprinkles({
            background: "transparent",
        }),
        {
            width: "100%",
            fontSize: "0.9rem",
            padding: "0 5px",
        },
    ],
    variants: {
        textTransform: {
            uppercase: sprinkles({ textTransform: "uppercase" }),
            capitalize: sprinkles({ textTransform: "capitalize" }),
            lowercase: sprinkles({ textTransform: "lowercase" }),
        },
        type: {
            number: [sprinkles({ type: "number" }), {}],
            text: sprinkles({ type: "text" }),
            email: [sprinkles({ type: "email" })],
            password: sprinkles({ type: "password" }),
            checkbox: [sprinkles({ type: "checkbox" })],
            checkboxLeft: [
                sprinkles({ type: "checkboxLeft" }),
                { justifyContent: "flex-start" },
            ],
            textarea: [sprinkles({ type: "textarea" })],
        },
        inputCursor: {
            pointer: sprinkles({
                cursor: { disabled: "not-allowed" },
                background: "transparent",
            }),
            text: sprinkles({
                cursor: { disabled: "text" },
                background: "transparent",
            }),
        },
    },
    defaultVariants: {
        type: "text",
        inputCursor: "pointer",
    },
});
