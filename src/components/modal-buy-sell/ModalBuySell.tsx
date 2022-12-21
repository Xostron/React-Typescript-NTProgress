import style from './ModalBuySell.module.scss'
import React, { FC, useState, useContext } from 'react'
import { IArchive, IInputText, ITicker } from '../../types/types'
import { HandySvg } from 'handy-svg'
import iClose from '../../source/icons/bx-x.svg'
import { InputText } from '../UI/input/input-text/InputText'
import { BtnText } from '../UI/button/btn-text/BtnText'
import { ArchiveContext } from '../../App'


interface IPropsModalBS {
    props: ITicker
    onClose?: (val: boolean) => void
}

export const ModalBuySell: FC<IPropsModalBS> = ({ props, onClose }) => {

    const { archive, setArchive } = useContext(ArchiveContext)

    const [volume, setVolume] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(e.target.value)
    }

    const handlerOK = () => {
        let data: IArchive = {
            side: props.side,
            price: props.price,
            instrument: props.name,
            volume: volume,
            timestamp: new Date().toLocaleString()
        }
        setArchive([...archive, data])
        onClose?.(false)
    }

    const handlerCancel = () => { onClose?.(false) }

    const inputProps: IInputText = {
        name: 'volume',
        changeHandler: changeHandler,
        value: volume
    }
    console.log(archive)
    return (
        <div className={style.container}>

            <div className={style.wrapper}>
                <div className={style.header}>
                    <span>Make order</span>
                    <HandySvg color={props.side} className={style.iconClose} src={iClose} />
                </div>
            </div>
            <hr color={props.side} />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <span color={props.side}> {props.side}</span>
                    <span>{props.price}</span>
                    <span>{props.name}</span>
                </div>

                <div className={style.customInput}>
                    <span>Volume:</span>
                    <InputText props={inputProps} />
                </div>

                <div className={style.buttons}>
                    <BtnText onClick={handlerCancel}>Cancel</BtnText>
                    <BtnText onClick={handlerOK}>OK</BtnText>
                </div>
            </div>
        </div >
    )
}