import React from "react";
import { spinner, loadingDiv } from "./loadingSpinner.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function LoadingSpinner() {
    return (<div className={loadingDiv}>
            <AiOutlineLoading3Quarters className={spinner}/>
        </div>);
}
