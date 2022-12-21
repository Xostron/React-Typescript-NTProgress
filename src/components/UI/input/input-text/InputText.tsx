import React, { FC } from "react";
import style from './InputText.module.scss'
import { IInputText } from "../../../../types/types";



interface IPropsInputText {
    props: IInputText
}

export const InputText: FC<IPropsInputText> = ({ props }) => {
    const {
        name,
        placeholder,
        autoFocus,
        changeHandler,
        value,
    } = props
    return (

        <input
            className={style.myInput}
            type='number'
            autoComplete='off'
            autoFocus={autoFocus || false}
            placeholder={placeholder}
            name={name}
            onChange={changeHandler}
            value={value}
        />

    )
}