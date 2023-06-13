import { recipe } from "@vanilla-extract/recipes";
import { colors } from "../../Foundations/Colors/colors.css";
export var notification = recipe({
    base: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "22px",
        width: "22px",
        borderRadius: "50%",
        right: "-8px",
        top: "-8px",
        fontSize: "10px",
    },
    variants: {
        color: {
            blue: {
                background: colors.vrBlue400,
                color: colors.white,
            },
            red: {
                background: "#c21807",
                color: colors.white,
            },
        },
    },
    defaultVariants: {
        color: "blue",
    },
});
