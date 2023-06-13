import React from "react";
import { notification } from "./notification.css";
export default function NotificationBubble(props) {
    var color = props.color, children = props.children;
    return <div className={notification({ color: color })}>{children}</div>;
}
