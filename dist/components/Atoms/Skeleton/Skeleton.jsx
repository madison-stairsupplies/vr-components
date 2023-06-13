import React from "react";
import { gradientBackground, skeleton } from "./animation.css";
export default function Skeleton(props) {
    var height = props.height;
    return (<div className={"".concat(skeleton, " + ").concat(gradientBackground)} style={{ height: height }}/>);
}
