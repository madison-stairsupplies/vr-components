import React from "react";
import { LogoVariants } from "./logo.css";
interface LogoProps {
    size?: Pick<NonNullable<LogoVariants>, "size">["size"];
}
export default function Logo(props: LogoProps): React.JSX.Element;
export {};
