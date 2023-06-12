import { InputVariants, TextAreaStyleVariants } from "./input.css";
import { FieldValues, RegisterOptions } from "react-hook-form";
import React from "react";
interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    displayName?: string;
    inputName: string;
    infoMessage?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    type: Pick<NonNullable<InputVariants>, "type">["type"];
    textTransform?: Pick<NonNullable<InputVariants>, "textTransform">["textTransform"];
    inputCursor?: Pick<NonNullable<InputVariants>, "inputCursor">["inputCursor"];
    textAreacursor?: Pick<NonNullable<TextAreaStyleVariants>, "textAreacursor">["textAreacursor"];
    maxHeight?: Pick<NonNullable<TextAreaStyleVariants>, "maxHeight">["maxHeight"];
    noSpecialChar?: boolean;
    options?: RegisterOptions<FieldValues>;
    min?: number;
    max?: number;
    pattern?: string;
    notInForm?: boolean;
}
export default function Input(props: inputProps): React.JSX.Element;
export {};
