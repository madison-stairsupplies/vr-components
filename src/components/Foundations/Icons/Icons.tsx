import {
    MdSpaceDashboard,
    MdKeyboardArrowRight,
    MdRemoveCircleOutline,
    MdKeyboardArrowLeft,
} from "react-icons/md";
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineBuild,
    AiOutlineFilePdf,
    AiOutlineMail,
    AiOutlineCheck,
    AiOutlineCopy,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import {
    BsListUl,
    BsBugFill,
    BsBank,
    BsArrowDownCircle,
    BsTelephone,
} from "react-icons/bs";
import { GrAddCircle, GrLogout, GrUploadOption } from "react-icons/gr";
import { CiTrash } from "react-icons/ci";
import { FiEdit2, FiCheckCircle, FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import { TbStairs, TbCircleDotted } from "react-icons/tb";
import { IconStyleVariants, icon } from "./icons.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import React from "react";
import { Sprinkles, sprinkles } from "../../../sprinkles.css";

export type IconVariants =
    | "dashboard"
    | "check"
    | "home"
    | "trash"
    | "search"
    | "builder"
    | "pdf"
    | "email"
    | "stairs"
    | "edit"
    | "dot"
    | "send"
    | "pending"
    | "complete"
    | "list"
    | "copy"
    | "bug"
    | "logout"
    | "cart"
    | "rightArrow"
    | "leftArrow"
    | "more"
    | "upArrow"
    | "downArrow"
    | "bank"
    | "location"
    | "addImage"
    | "deleteImage"
    | "upload"
    | "download"
    | "phone"
    | "circleArrowLeft"
    | "circleArrowRight";

interface Props {
    variant: IconVariants;
    size?: Pick<NonNullable<IconStyleVariants>, "size">["size"];
    color?: string;
    clickable?: Pick<NonNullable<IconStyleVariants>, "clickable">["clickable"];
    sx?: Sprinkles;
    children?: React.ReactNode;
    tooltip?: string;
}

export default function Icon(props: Props) {
    const { variant, size, color, clickable, sx, children } = props;

    return (
        <div style={{ display: "flex", position: "relative" }}>
            <div
                className={
                    icon({ size: size, clickable: clickable }) + sprinkles({ ...sx })
                }
                style={{ color: color }}
            >
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
                {variant === "bug" && <BsBugFill color="#c21807" />}
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
        </div>
    );
}
