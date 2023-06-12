import { MutableRefObject, KeyboardEvent } from "react";
import { fieldset, searchInput } from "./search.css";
import React from "react";
import Icon from "../../Foundations/Icons/Icons";

interface Props {
    placeholder?: string;
    onSearch: () => void;
    searchRef?: MutableRefObject<HTMLInputElement | null>;
    onChange?: any;
}

export default function Search(props: Props) {
    const { placeholder, onSearch, searchRef, onChange } = props;

    function handleSubmit(input: KeyboardEvent<HTMLInputElement>) {
        if (input.key !== "Enter") {
            return;
        }
        if (searchRef?.current?.value) {
            onSearch();
        }
    }
    return (
        <>
            <fieldset className={fieldset}>
                <Icon variant="search" />
                <input
                    type="search"
                    ref={searchRef}
                    placeholder={placeholder ? placeholder : "Search..."}
                    onKeyPress={(e) => handleSubmit(e)}
                    className={searchInput}
                    onChange={onChange}
                />
            </fieldset>
        </>
    );
}
