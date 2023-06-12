import React from "react";
interface Option {
    name: string;
    value: string | number | boolean;
}
interface ToggleGroupProps {
    displayName: string;
    inputName: string;
    options: Option[];
    defaultOption: any;
    isNumber?: boolean;
}
export declare function ToggleGroup({ displayName, inputName, defaultOption, options, isNumber, }: ToggleGroupProps): React.JSX.Element;
export {};
