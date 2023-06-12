import { style } from "@vanilla-extract/css";
import { colors } from "../../Foundations/Colors/colors.css";

export const fieldset = style({
    position: "relative",
    margin: "0px auto",
    padding: "5px 10px",

    textTransform: "capitalize",
    background: colors.gray100,
    borderRadius: "5px",
    border: `2px solid transparent`,
    maxHeight: "40px",
    display: "flex",
    alignItems: "center",
});

export const searchInput = style({
    marginLeft: "8px",
    background: "transparent",
    width: "100%",
});
