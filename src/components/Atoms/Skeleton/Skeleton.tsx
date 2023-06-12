import React from "react";
import { gradientBackground, skeleton } from "./animation.css";

interface Props {
    height?: string;
}

export default function Skeleton(props: Props) {
    const { height } = props;
    return (
        <div
            className={`${skeleton} + ${gradientBackground}`}
            style={{ height: height }}
        />
    );
}
