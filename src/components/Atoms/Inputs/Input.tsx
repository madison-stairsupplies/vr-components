import {
    fieldset,
    input,
    InputVariants,
    labelStyle,
    labelStyleLeft,
    legendStyle,
    textAreaStyle,
    TextAreaStyleVariants,
} from "./input.css";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    displayName?: string;
    inputName: string;
    infoMessage?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    type: Pick<NonNullable<InputVariants>, "type">["type"];
    textTransform?: Pick<
        NonNullable<InputVariants>,
        "textTransform"
    >["textTransform"];
    inputCursor?: Pick<NonNullable<InputVariants>, "inputCursor">["inputCursor"];
    textAreacursor?: Pick<
        NonNullable<TextAreaStyleVariants>,
        "textAreacursor"
    >["textAreacursor"];
    maxHeight?: Pick<
        NonNullable<TextAreaStyleVariants>,
        "maxHeight"
    >["maxHeight"];
    noSpecialChar?: boolean;
    options?: RegisterOptions<FieldValues>;
    min?: number;
    max?: number;
    pattern?: string;
    notInForm?: boolean;
}

export default function Input(props: inputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const {
        displayName, //displayName
        inputName, //inputName
        infoMessage,
        children,
        style,
        type,
        textTransform,
        placeholder,
        defaultValue,
        disabled,
        inputCursor,
        textAreacursor,
        maxHeight,
        noSpecialChar,
        options,
        min,
        max,
        pattern,
        notInForm,
        ...rest
    } = props;
    const valueType = type === "number" ? true : false;

    //need to increase the size of the check box to fit the entire field set rather than it having a small check box in the field set
    return (
        <>
            {type === "checkbox" && (
                <>
                    <label className={labelStyle}>
                        {displayName ? `${displayName}:` : ""}
                        <fieldset className={fieldset({ variant: "checkbox" })}>
                            {notInForm ? (
                                <input
                                    type={type}
                                    disabled={disabled}
                                    className={input({
                                        type: type,
                                    })}
                                />
                            ) : (
                                <input
                                    type={type}
                                    {...register(inputName)}
                                    disabled={disabled}
                                    {...rest}
                                    className={input({
                                        type: type,
                                    })}
                                />
                            )}
                        </fieldset>
                    </label>
                </>
            )}
            {type === "checkboxLeft" && (
                <>
                    <label className={labelStyleLeft}>
                        <fieldset className={fieldset({ variant: "checkbox" })}>
                            <input
                                type="checkbox"
                                {...register(inputName)}
                                disabled={disabled}
                                {...rest}
                                className={input({
                                    type: "checkbox",
                                })}
                            />
                        </fieldset>
                        {displayName ? `${displayName}` : ""}
                    </label>
                </>
            )}
            {type === "textarea" && (
                <>
                    <label className={labelStyle}>
                        {displayName ? `${displayName}:` : ""}
                    </label>
                    <textarea
                        {...register(inputName)}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        className={textAreaStyle({
                            maxHeight: maxHeight,
                            textAreacursor: textAreacursor,
                        })}
                    />
                </>
            )}
            {(type === "number" ||
                type === "email" ||
                type === "password" ||
                type === "text") && (
                    <>
                        <label className={labelStyle}>
                            {displayName ? `${displayName}:` : ""}{" "}
                            {infoMessage && (
                                <legend className={legendStyle}>{infoMessage} </legend>
                            )}
                        </label>
                        <fieldset className={fieldset()}>
                            {/* <legend className={labelStyle}>{label}</legend> */}
                            <input
                                type={type}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                disabled={disabled}
                                {...rest}
                                className={input({
                                    type: type,
                                    textTransform: textTransform,
                                    inputCursor: inputCursor,
                                })}
                            />
                        </fieldset>
                        <div style={{ color: "red", fontSize: "0.6rem", width: "94%" }}>
                            <ErrorMessage errors={errors} name={inputName} />
                        </div>
                    </>
                )}
        </>
    );
}
