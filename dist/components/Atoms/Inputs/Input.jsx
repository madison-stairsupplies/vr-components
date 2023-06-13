var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { fieldset, input, labelStyle, labelStyleLeft, legendStyle, textAreaStyle, } from "./input.css";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
export default function Input(props) {
    var _a = useFormContext(), register = _a.register, errors = _a.formState.errors;
    var displayName = props.displayName, //displayName
    inputName = props.inputName, //inputName
    infoMessage = props.infoMessage, children = props.children, style = props.style, type = props.type, textTransform = props.textTransform, placeholder = props.placeholder, defaultValue = props.defaultValue, disabled = props.disabled, inputCursor = props.inputCursor, textAreacursor = props.textAreacursor, maxHeight = props.maxHeight, noSpecialChar = props.noSpecialChar, options = props.options, min = props.min, max = props.max, pattern = props.pattern, notInForm = props.notInForm, rest = __rest(props, ["displayName", "inputName", "infoMessage", "children", "style", "type", "textTransform", "placeholder", "defaultValue", "disabled", "inputCursor", "textAreacursor", "maxHeight", "noSpecialChar", "options", "min", "max", "pattern", "notInForm"]);
    var valueType = type === "number" ? true : false;
    //need to increase the size of the check box to fit the entire field set rather than it having a small check box in the field set
    return (<>
            {type === "checkbox" && (<>
                    <label className={labelStyle}>
                        {displayName ? "".concat(displayName, ":") : ""}
                        <fieldset className={fieldset({ variant: "checkbox" })}>
                            {notInForm ? (<input type={type} disabled={disabled} className={input({
                    type: type,
                })}/>) : (<input type={type} {...register(inputName)} disabled={disabled} {...rest} className={input({
                    type: type,
                })}/>)}
                        </fieldset>
                    </label>
                </>)}
            {type === "checkboxLeft" && (<>
                    <label className={labelStyleLeft}>
                        <fieldset className={fieldset({ variant: "checkbox" })}>
                            <input type="checkbox" {...register(inputName)} disabled={disabled} {...rest} className={input({
                type: "checkbox",
            })}/>
                        </fieldset>
                        {displayName ? "".concat(displayName) : ""}
                    </label>
                </>)}
            {type === "textarea" && (<>
                    <label className={labelStyle}>
                        {displayName ? "".concat(displayName, ":") : ""}
                    </label>
                    <textarea {...register(inputName)} placeholder={placeholder} defaultValue={defaultValue} disabled={disabled} className={textAreaStyle({
                maxHeight: maxHeight,
                textAreacursor: textAreacursor,
            })}/>
                </>)}
            {(type === "number" ||
            type === "email" ||
            type === "password" ||
            type === "text") && (<>
                        <label className={labelStyle}>
                            {displayName ? "".concat(displayName, ":") : ""}{" "}
                            {infoMessage && (<legend className={legendStyle}>{infoMessage} </legend>)}
                        </label>
                        <fieldset className={fieldset()}>
                            {/* <legend className={labelStyle}>{label}</legend> */}
                            <input type={type} placeholder={placeholder} defaultValue={defaultValue} disabled={disabled} {...rest} className={input({
                type: type,
                textTransform: textTransform,
                inputCursor: inputCursor,
            })}/>
                        </fieldset>
                        <div style={{ color: "red", fontSize: "0.6rem", width: "94%" }}>
                            <ErrorMessage errors={errors} name={inputName}/>
                        </div>
                    </>)}
        </>);
}
