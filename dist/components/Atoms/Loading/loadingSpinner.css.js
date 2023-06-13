import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "../../Foundations/Colors/colors.css";
export var loadingDiv = style({
    width: "60px",
    height: "60px",
    fontSize: "400rem",
});
var rotate = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
});
export var spinner = style({
    borderRadius: "50%",
    fontSize: "2rem",
    color: colors.vrBlue400,
    animation: "".concat(rotate, " 2s linear infinite"),
});
