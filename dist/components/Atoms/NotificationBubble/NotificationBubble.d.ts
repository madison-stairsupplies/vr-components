import React from "react";
import { NotificationVariants } from "./notification.css";
interface Props {
    notificationTip?: string;
    color?: Pick<NonNullable<NotificationVariants>, "color">["color"];
    children: React.ReactNode | string;
    tooltip?: string;
}
export default function NotificationBubble(props: Props): React.JSX.Element;
export {};
