import style from '../style/TradingPage.module.scss'
import React, { FC, useState } from 'react'
import { Ticker } from '../components/price-card/ticker/Ticker'
import { TimerUTC } from '../components/timer/TimerUTC'



const TradingPage: FC = () => {


    return (
        <div className={style.container}>
            <TimerUTC />
            <Ticker />
        </div>
    )
}

export default TradingPage