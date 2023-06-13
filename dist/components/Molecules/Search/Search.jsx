import { fieldset, searchInput } from "./search.css";
import React from "react";
import Icon from "../../Foundations/Icons/Icons";
export default function Search(props) {
    var placeholder = props.placeholder, onSearch = props.onSearch, searchRef = props.searchRef, onChange = props.onChange;
    function handleSubmit(input) {
        var _a;
        if (input.key !== "Enter") {
            return;
        }
        if ((_a = searchRef === null || searchRef === void 0 ? void 0 : searchRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            onSearch();
        }
    }
    return (<>
            <fieldset className={fieldset}>
                <Icon variant="search"/>
                <input type="search" ref={searchRef} placeholder={placeholder ? placeholder : "Search..."} onKeyPress={function (e) { return handleSubmit(e); }} className={searchInput} onChange={onChange}/>
            </fieldset>
        </>);
}
