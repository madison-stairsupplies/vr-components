import React from "react";
import { logoStyle, LogoVariants } from "./logo.css";

interface LogoProps {
    size?: Pick<NonNullable<LogoVariants>, "size">["size"];
}

export default function Logo(props: LogoProps) {
    return (
        <img
            src="https://stairsupplies.imgix.net/logo.png"
            className={logoStyle({ size: props.size })}
        />
    );
}
