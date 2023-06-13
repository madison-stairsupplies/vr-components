import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../sprinkles.css";
import { colors } from "../../Foundations/Colors/colors.css";
export var toggle = recipe({
    base: [
        sprinkles({
            display: "flex",
            placeItems: "center",
            paddingX: "small",
            justifyContent: "center",
            textTransform: "capitalize",
            cursor: "pointer",
        }),
        { height: "100%", width: "50%", borderRadius: "5px" },
    ],
    variants: {
        variant: {
            checked: {
                background: colors.white,
                color: colors.vrBlue400,
                border: "3px solid ".concat(colors.gray200),
                // borderRadius: `10px 30px 30px 10px`,
            },
            notChecked: {
                background: colors.gray200,
                color: "#a4a4a4",
            },
        },
    },
    defaultVariants: {
        variant: "notChecked",
    },
});
export var divStyle = style({
    display: "flex",
    borderRadius: "50px",
    background: colors.gray200,
    height: "44px",
    alignItems: "center",
    textTransform: "capitalize",
});
