import { keyframes, style } from "@vanilla-extract/css";
export var skeleton = style({
    width: "100%",
    height: "30px",
});
var gradient = keyframes({
    "0%": {
        backgroundColor: "#eaeaea",
    },
    "100%": {
        backgroundColor: "#f4f4f4",
    },
});
export var gradientBackground = style({
    animation: "".concat(gradient, " 1.5s linear infinite"),
});
