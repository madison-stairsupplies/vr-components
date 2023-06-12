import { optionStyle, selectStyle } from "./select.css";
import { labelStyle } from "../Inputs/input.css";
import { useFormContext } from "react-hook-form";
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

export default function Select(props: SelectProps) {
    const {
        displayName,
        inputName,
        options,
        isNumber,
        onChange,
        isNotForm,
        value,
    } = props;
    const { register, watch } = useFormContext();
    const val = watch(inputName);

    let defaultValue: any;
    let option = options.find((opt) => opt.value === val);
    if (option) {
        defaultValue = val;
    } else {
        defaultValue = options.length ? options[0].value : undefined;
    }
    return (
        <>
            {isNotForm ? (
                <>
                    <label className={labelStyle}>{displayName}</label>
                    <select
                        className={selectStyle}
                        onChange={onChange}
                        name={inputName}
                        value={value}
                    >
                        {options &&
                            options.map((option, index) => (
                                <option
                                    key={index}
                                    className={optionStyle}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                    </select>
                </>
            ) : (
                <>
                    <label className={labelStyle}>{displayName}</label>
                    <select
                        className={selectStyle}
                        defaultValue={defaultValue}
                        {...register(inputName, {
                            value: defaultValue,
                            valueAsNumber: isNumber,
                        })}
                    >
                        {options &&
                            options.map((option, index) => (
                                <option
                                    key={index}
                                    className={optionStyle}
                                    value={option.value}
                                    selected={option.value === defaultValue}
                                >
                                    {option.label}
                                </option>
                            ))}
                    </select>
                </>
            )}
        </>
    );
}
