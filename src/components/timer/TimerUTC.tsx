import style from './TimerUTC.module.scss'
import React, { FC } from 'react'
import { useSchedular } from '../../hooks/useSchedular'

export const TimerUTC: FC = () => {
    const { currentTime } = useSchedular(callback, 1000)
    function callback() {

    }
    let hh = currentTime.getHours()
    let mm = currentTime.getMinutes()
    let ss = currentTime.getSeconds()

    return (
        <div className={style.container}>
            <div className={style.numb}>{hh > 9 ? hh : '0' + hh}</div>:
            <div className={style.numb}>{mm > 9 ? mm : '0' + mm}</div>:
            <div className={style.numb}>{ss > 9 ? ss : '0' + ss}</div>
        </div>
    )
}