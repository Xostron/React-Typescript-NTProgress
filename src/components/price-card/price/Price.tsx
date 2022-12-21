import style from './Price.module.scss'
import React, { FC, useState, useEffect } from 'react'
import { PriceCard } from '../PriceCard'
import { useSchedular } from '../../../hooks/useSchedular'
import { ICurrency } from '../../../types/types'
import { MyModal } from '../../UI/modal/MyModal'

interface IPropsPrice extends ICurrency {
    handler?: (type: string, name: string, price: number) => void;
}


// Компонент отображение цены выбранной валюты (кнопки вызова модального окна)
export const Price: FC<IPropsPrice> = ({ instrument, price, coef, handler }) => {
    // инициализация симулятора изменения цены
    const [sim, setSim] = useState<number>(0)

    // цена покупки/продажи с учетом симулятора изменения цены
    let buyPrice = parseFloat((price + sim).toFixed(4)) || 0
    let sellPrice = parseFloat((buyPrice * 0.95).toFixed(4)) || 0

    // движок симулятора - каждые 3сек происходит изменение цены
    useSchedular(() => {
        let randomNumber = Math.random()

        if (randomNumber >= 0.5) setSim(randomNumber * (coef))
        else setSim(randomNumber * (-coef))

    }, 3000)

    // сброс симулятора при смене валюты
    useEffect(() => { setSim(0) }, [instrument])

    return (
        <div className={style.container}>
            {/* компонент покупки валюты */}
            <div
                className={style.btn}
                color='green'
                onClick={() => { handler?.('Buy', instrument, buyPrice) }}
            >
                <PriceCard
                    name='BUY'
                    price={buyPrice}
                    color={'#1ED760'}
                />
            </div>
            {/* компонент продажи валюты */}
            <div
                className={style.btn}
                color='red'
                onClick={() => { handler?.('Sell', instrument, sellPrice) }}
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