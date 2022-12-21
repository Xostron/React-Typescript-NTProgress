import style from './Price.module.scss'
import React, { FC, useState, useEffect } from 'react'
import { PriceCard } from '../PriceCard'
import { useSchedular } from '../../../hooks/useSchedular'
import { ICurrency } from '../../../types/types'
import { MyModal } from '../../UI/modal/MyModal'

interface IPropsPrice extends ICurrency {
    handler?: (type: string, name: string, price: number) => void;
}

export const Price: FC<IPropsPrice> = ({ name, price, coef, handler }) => {
    // инициализация симулятора изменения цены
    const [sim, setSim] = useState<number>(0)

    // цена покупки/продажи с учетом симулятора изменения цены
    let buyPrice = parseFloat((price + sim).toFixed(4)) || 0
    let sellPrice = parseFloat((buyPrice * 0.95).toFixed(4)) || 0

    // движок симулятора - каждые 3сек происходит изменение цены
    useSchedular(() => {
        setSim(Math.random() * (coef))
    }, 3000)

    // сброс симулятора при смене валюты
    useEffect(() => { setSim(0) }, [name])

    return (
        <div className={style.container}>

            <div
                className={style.btn}
                color='green'
                onClick={() => { handler?.('Buy', name, buyPrice) }}
            >
                <PriceCard
                    name='BUY'
                    price={buyPrice}
                    color={'#1ED760'}
                />
            </div>

            <div
                className={style.btn}
                color='red'
                onClick={() => { handler?.('Sell', name, sellPrice) }}
            >
                <PriceCard
                    name='SELL'
                    price={sellPrice}
                    color={'#e03c30'}
                />
            </div>

        </div>
    )
}