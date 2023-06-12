import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { colors } from "./components/Foundations/Colors/colors.css";

export const gap = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 28,
};
export const shadow = {
  none: "none",
  primary: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  secondary: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  tertiary:
    "rgba(50, 50, 93, 0.05) 0px 6px 8px -2px, rgba(0, 0, 0, 0.3) 0px 3px 5px -3px;",
  toggle: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
};

export const radius = {
  small: 4,
  medium: 8,
  large: 8,
  rounded: "50%",
};

export const height = {
  100: "100%",
  "100vh": "100vh",
  auto: "auto",
  inherit: "inherit",
};

export const space = {
  auto: "0 auto",
  none: 0,
  xxs: "0.3rem",
  xs: "0.5rem",
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  xl: "4rem",
  xxl: "5rem",
};

const width = {
  0: 0,
  1: `${(1 / 12) * 100}%`,
  2: `${(2 / 12) * 100}%`,
  3: `${(3 / 12) * 100}%`,
  4: `${(4 / 12) * 100}%`,
  5: `${(5 / 12) * 100}%`,
  6: `${(6 / 12) * 100}%`,
  7: `${(7 / 12) * 100}%`,
  8: `${(8 / 12) * 100}%`,
  9: `${(9 / 12) * 100}%`,
  10: `${(10 / 12) * 100}%`,
  11: `${(11 / 12) * 100}%`,
  12: `100%`,
};
const basis = {
  0: 0,
  1: `${(1 / 12) * 100}%`,
  2: `${(2 / 12) * 100}%`,
  3: `${(3 / 12) * 100}%`,
  4: `${(4 / 12) * 100}%`,
  5: `${(5 / 12) * 100}%`,
  6: `${(6 / 12) * 100}%`,
  7: `${(7 / 12) * 100}%`,
  8: `${(8 / 12) * 100}%`,
  9: `${(9 / 12) * 100}%`,
  10: `${(10 / 12) * 100}%`,
  11: `${(11 / 12) * 100}%`,
  12: `100%`,
};

export const border = {
  none: "none",
  solid: "1px solid black",
  lightGray: `1px solid ${colors.gray200}`,
  gray: `1px solid ${colors.gray300}`,
  darkGray: `1px solid ${colors.gray400}`,
  dotted: `1px dotted ${colors.gray400}`,
};

const inputType = {
  number: "number",
  text: "text",
  date: "date",
  checkbox: "checkbox",
  checkboxLeft: "checkboxLeft",
  email: "email",
  password: "password",
  file: "file",
  textarea: "textarea",
};

export const fontSize = {
  xs: "0.80rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
};

export const lineHeight = {
  xs: "0.875rem",
  sm: "1rem",
  md: "1.125rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "1.875rem",
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
  },
  defaultCondition: "mobile",
  properties: {
    minWidth: width,
    maxWidth: width,
    boxSizing: ["border-box"],
    width: width,
    flexBasis: basis,
    flexWrap: ["wrap", "nowrap"],
    flexShrink: [1],
    flexGrow: [1],
    gap: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    margin: space,
    display: ["none", "flex", "block", "inline", "inline-flex", "initial"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    textAlign: ["right", "left", "center", "justify"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    padding: space,
    position: ["absolute", "relative", "fixed", "sticky"],
    borderRadius: radius,
    textTransform: ["uppercase", "lowercase", "capitalize"],
    fontWeight: ["bold", "normal", "bolder", "lighter", 200, 300, 400, 500],
    type: inputType,
    fontSize: fontSize,
    lineHeight: lineHeight,
    outline: ["none"],
    height: height,
    minHeight: height,
    fontStyle: ["italic"],
    top: [0, "500px"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    disabled: { selector: "&:disabled" },
    focus: { selector: "&:focus" },
    focusWithin: { selector: "&:focus-within" },
    disabledHover: { selector: "&:disabled:hover" },
    dark: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "default",
  properties: {
    color: colors,
    background: colors,
    border: border,
    borderBottom: border,
    borderLeft: border,
    borderRight: border,
    borderTop: border,
    cursor: ["not-allowed", "pointer", "auto", "text"],
    boxShadow: shadow,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
