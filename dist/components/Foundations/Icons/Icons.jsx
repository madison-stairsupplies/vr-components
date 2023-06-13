var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { MdSpaceDashboard, MdKeyboardArrowRight, MdRemoveCircleOutline, MdKeyboardArrowLeft, } from "react-icons/md";
import { AiOutlineHome, AiOutlineSearch, AiOutlineBuild, AiOutlineFilePdf, AiOutlineMail, AiOutlineCheck, AiOutlineCopy, AiOutlineShoppingCart, } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { BsListUl, BsBugFill, BsBank, BsArrowDownCircle, BsTelephone, } from "react-icons/bs";
import { GrAddCircle, GrLogout, GrUploadOption } from "react-icons/gr";
import { CiTrash } from "react-icons/ci";
import { FiEdit2, FiCheckCircle, FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import { TbStairs, TbCircleDotted } from "react-icons/tb";
import { icon } from "./icons.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import React from "react";
import { sprinkles } from "../../../sprinkles.css";
export default function Icon(props) {
    var variant = props.variant, size = props.size, color = props.color, clickable = props.clickable, sx = props.sx, children = props.children;
    return (<div style={{ display: "flex", position: "relative" }}>
            <div className={icon({ size: size, clickable: clickable }) + sprinkles(__assign({}, sx))} style={{ color: color }}>
                {variant === "dashboard" && <MdSpaceDashboard />}
                {variant === "home" && <AiOutlineHome />}
                {variant === "trash" && <CiTrash />}
                {variant === "search" && <AiOutlineSearch />}
                {variant === "builder" && <AiOutlineBuild />}
                {variant === "pdf" && <AiOutlineFilePdf />}
                {variant === "email" && <AiOutlineMail />}
                {variant === "stairs" && <TbStairs />}
                {variant === "edit" && <FiEdit2 />}
                {variant === "dot" && <RxDotFilled />}
                {variant === "check" && <AiOutlineCheck />}
                {variant === "send" && <BiSend />}
                {variant === "complete" && <FiCheckCircle />}
                {variant === "pending" && <TbCircleDotted />}
                {variant === "list" && <BsListUl />}
                {variant === "copy" && <AiOutlineCopy />}
                {variant === "bug" && <BsBugFill color="#c21807"/>}
                {variant === "logout" && <GrLogout />}
                {variant === "cart" && <AiOutlineShoppingCart />}
                {variant === "rightArrow" && <MdKeyboardArrowRight />}
                {variant === "leftArrow" && <MdKeyboardArrowLeft />}
                {variant === "more" && <FiMoreHorizontal />}
                {variant === "upArrow" && <IoIosArrowUp />}
                {variant === "downArrow" && <IoIosArrowDown />}
                {variant === "bank" && <BsBank />}
                {variant === "location" && <GoLocation />}
                {variant === "addImage" && <GrAddCircle />}
                {variant === "deleteImage" && <MdRemoveCircleOutline />}
                {variant === "upload" && <GrUploadOption />}
                {variant === "download" && <BsArrowDownCircle />}
                {variant === "phone" && <BsTelephone />}
                {variant === "circleArrowRight" && <TfiArrowCircleRight />}
                {variant === "circleArrowLeft" && <TfiArrowCircleLeft />}
            </div>
            {children}
        </div>);
}
