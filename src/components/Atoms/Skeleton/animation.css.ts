import { keyframes, style } from "@vanilla-extract/css";

export const skeleton = style({
    width: "100%",
    height: "30px",
});

const gradient = keyframes({
    "0%": {
        backgroundColor: "#eaeaea",
    },
    "100%": {
        backgroundColor: "#f4f4f4",
    },
});
export const gradientBackground = style({
    animation: `${gradient} 1.5s linear infinite`,
});
