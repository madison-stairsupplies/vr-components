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

export function TabLabels(props: TabLabelProps) {
    const { children } = props;
    return <div>{children}</div>;
}

export function TabBody(props: TabBodyProps) {
    const { children } = props;
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}

export function Tab(props: TabProps) {
    const { value, label } = props;
    return <div id={value.toString()}>{label}</div>;
}
