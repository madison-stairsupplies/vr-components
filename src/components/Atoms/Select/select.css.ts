import { style } from "@vanilla-extract/css";
import { colors } from "../../Foundations/Colors/colors.css";

export const selectStyle = style({
    background: "#f1f1f1",
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: `2px solid transparent`,
    ":focus-within": {
        border: `2px solid ${colors.gray400}`,
    },
});

export const optionStyle = style({});
