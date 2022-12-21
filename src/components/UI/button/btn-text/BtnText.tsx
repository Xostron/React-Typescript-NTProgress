import React, { FC } from "react";
import style from "./BtnText.module.scss"


interface IPropsBtnText {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BtnText: FC<IPropsBtnText> = ({ children, onClick }) => {
    return (
        <button className={style.container} onClick={onClick}>
            {children}
        </button>
    )
}