import React from "react";
interface TabBodyProps {
    children?: React.ReactNode;
    value: number;
}
interface TabProps {
    value: number;
    label: string;
}
interface TabLabelProps {
    children: React.ReactNode;
}
export declare function TabLabels(props: TabLabelProps): React.JSX.Element;
export declare function TabBody(props: TabBodyProps): React.JSX.Element;
export declare function Tab(props: TabProps): React.JSX.Element;
export {};
