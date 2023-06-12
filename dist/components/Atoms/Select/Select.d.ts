import React from "react";
export type Option = {
    label: string;
    value: string | number;
};
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    displayName: string;
    inputName: string;
    value?: string | number;
    options: Option[];
    isNumber?: boolean;
    onChange?: any;
    isNotForm?: boolean;
}
export default function Select(props: SelectProps): React.JSX.Element;
export {};
