import React from "react";
import { notification, NotificationVariants } from "./notification.css";

interface Props {
    notificationTip?: string;
    color?: Pick<NonNullable<NotificationVariants>, "color">["color"];
    children: React.ReactNode | string;
    tooltip?: string;
}

export default function NotificationBubble(props: Props) {
    const { color, children } = props;
    return <div className={notification({ color: color })}>{children}</div>;
}
