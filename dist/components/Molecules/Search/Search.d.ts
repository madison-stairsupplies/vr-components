import { MutableRefObject } from "react";
import React from "react";
interface Props {
    placeholder?: string;
    onSearch: () => void;
    searchRef?: MutableRefObject<HTMLInputElement | null>;
    onChange?: any;
}
export default function Search(props: Props): React.JSX.Element;
export {};
