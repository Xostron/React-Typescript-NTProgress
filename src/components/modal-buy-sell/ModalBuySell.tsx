import style from './ModalBuySell.module.scss'
import React, { FC } from 'react'
import { ITicker } from '../../types/types'
import { HandySvg } from 'handy-svg'
import iClose from '../../source/icons/bx-x.svg'


interface IPropsModalBS {
    props: ITicker
}

export const ModalBuySell: FC<IPropsModalBS> = ({ props }) => {
    return (
        <div className={style.container}>

            <div className={style.header}>
                <span>Make order</span>
                <HandySvg className={style.iconClose} src={iClose} />
            </div>

            <div className={style.info}>
                <span> {props.type}</span>
                <span>{props.price}</span>
                <span>{props.name}</span>
            </div>

            <input type={'text'} />

            <div className={style.buttons}>

            </div>

        </div >
    )
}