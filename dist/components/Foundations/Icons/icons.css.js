import { recipe } from "@vanilla-extract/recipes";
import { colors } from "../Colors/colors.css";
import { sprinkles } from "../../../sprinkles.css";
export var icon = recipe({
    base: { display: "inline-block", position: "relative" },
    variants: {
        size: {
            10: { fontSize: "10px" },
            12: { fontSize: "12px" },
            16: { fontSize: "16px" },
            18: { fontSize: "18px" },
            20: { fontSize: "20px" },
            30: { fontSize: "30px" },
            40: { fontSize: "40px" },
            50: { fontSize: "50px" },
            60: { fontSize: "60px" },
            70: { fontSize: "70px" },
            80: { fontSize: "80px" },
        },
        colors: colors,
        clickable: {
            none: {},
            clickable: [
                sprinkles({
                    color: {
                        hover: "gray100",
                    },
                    cursor: "pointer",
                }),
            ],
        },
    },
    defaultVariants: {
        size: 18,
    },
});
