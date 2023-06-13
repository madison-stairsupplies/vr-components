import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { labelStyle } from "../Inputs/input.css";
import { divStyle, toggle } from "./toggle.css";
import React from "react";
export function ToggleGroup(_a) {
    var displayName = _a.displayName, inputName = _a.inputName, defaultOption = _a.defaultOption, options = _a.options, isNumber = _a.isNumber;
    var _b = useFormContext(), register = _b.register, setValue = _b.setValue;
    var _c = useState(defaultOption), active = _c[0], setActive = _c[1];
    function set(value) {
        setActive(value);
        setValue(inputName, value, { shouldDirty: true });
    }
    return (<>
            <p className={labelStyle}>{displayName}:</p>
            <div className={divStyle} {...register(inputName, { valueAsNumber: isNumber })}>
                {options.map(function (option, index) { return (<span key={index} className={active === option.value
                ? toggle({ variant: "checked" })
                : toggle({ variant: "notChecked" })} onClick={function () { return set(option.value); }}>
                        {option.name}
                    </span>); })}
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
        </>);
}
