import React from "react";
export function TabLabels(props) {
    var children = props.children;
    return <div>{children}</div>;
}
export function TabBody(props) {
    var children = props.children;
    return (<div>
            <div>{children}</div>
        </div>);
}
export function Tab(props) {
    var value = props.value, label = props.label;
    return <div id={value.toString()}>{label}</div>;
}
