import { optionStyle, selectStyle } from "./select.css";
import { labelStyle } from "../Inputs/input.css";
import { useFormContext } from "react-hook-form";
import React from "react";
export default function Select(props) {
    var displayName = props.displayName, inputName = props.inputName, options = props.options, isNumber = props.isNumber, onChange = props.onChange, isNotForm = props.isNotForm, value = props.value;
    var _a = useFormContext(), register = _a.register, watch = _a.watch;
    var val = watch(inputName);
    var defaultValue;
    var option = options.find(function (opt) { return opt.value === val; });
    if (option) {
        defaultValue = val;
    }
    else {
        defaultValue = options.length ? options[0].value : undefined;
    }
    return (<>
            {isNotForm ? (<>
                    <label className={labelStyle}>{displayName}</label>
                    <select className={selectStyle} onChange={onChange} name={inputName} value={value}>
                        {options &&
                options.map(function (option, index) { return (<option key={index} className={optionStyle} value={option.value}>
                                    {option.label}
                                </option>); })}
                    </select>
                </>) : (<>
                    <label className={labelStyle}>{displayName}</label>
                    <select className={selectStyle} defaultValue={defaultValue} {...register(inputName, {
            value: defaultValue,
            valueAsNumber: isNumber,
        })}>
                        {options &&
                options.map(function (option, index) { return (<option key={index} className={optionStyle} value={option.value} selected={option.value === defaultValue}>
                                    {option.label}
                                </option>); })}
                    </select>
                </>)}
        </>);
}
