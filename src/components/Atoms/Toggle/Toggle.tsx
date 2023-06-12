import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { labelStyle } from "../Inputs/input.css";
import { divStyle, toggle, ToggleVariants } from "./toggle.css";
import React from "react";

interface Option {
    name: string;
    value: string | number | boolean;
}

interface ToggleGroupProps {
    displayName: string;
    inputName: string;
    options: Option[];
    //setting what option will be the default option
    defaultOption: any;
    //allowing you to set state within a toggle component
    //Values passed must be a string "True" and "False" to work correctly
    isNumber?: boolean;
    //If you have a repeating toggle using ID to define what the inputs are
}

export function ToggleGroup({
    displayName,
    inputName,
    defaultOption,
    options,
    isNumber,
}: ToggleGroupProps) {
    const { register, setValue } = useFormContext();
    const [active, setActive] = useState<any>(defaultOption);

    function set(value: any) {
        setActive(value);
        setValue(inputName, value, { shouldDirty: true });
    }

    return (
        <>
            <p className={labelStyle}>{displayName}:</p>
            <div
                className={divStyle}
                {...register(inputName, { valueAsNumber: isNumber })}
            >
                {options.map((option, index) => (
                    <span
                        key={index}
                        className={
                            active === option.value
                                ? toggle({ variant: "checked" })
                                : toggle({ variant: "notChecked" })
                        }
                        onClick={() => set(option.value)}
                    >
                        {option.name}
                    </span>
                ))}
            </div>
            {/* <p className={labelStyle}>{displayName}:</p>
            <div className={divStyle}>
                {options.map((option, index) => {
                    return (
                        <label
                            className={toggle({
                                variant: active.name === option.name ? "checked" : "notChecked",
                            })}
                            key={index}
                            htmlFor={`${inputName}.${option.name}`}
                        >
                            {option.name}
                            <input
                                {...register(inputName, { valueAsNumber: isNumber })}
                                type="radio"
                                value={option.value}
                                id={`${inputName}.${option.name}`}
                                checked={option.name === active.name ? true : false}
                                onClick={() => {
                                    setActive(option);
                                    setStateControl && setStateControl(option.value === "true" ? true : false);
                                }}
                                style={{ width: "0px" }}
                            />
                        </label>
                    );
                })}
            </div>
        */}
        </>
    );
}
