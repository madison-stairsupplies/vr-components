import React from "react";
import { logoStyle } from "./logo.css";
export default function Logo(props) {
    return (<img src="https://stairsupplies.imgix.net/logo.png" className={logoStyle({ size: props.size })}/>);
}
