import style from './PriceCard.module.scss'
import React, { FC } from 'react'

interface IPriceCard {
    name: string,
    price: number,
    color?: string
}

export const PriceCard: FC<IPriceCard> = ({ name, price, color = 'black' }) => {
    return (
        <div className={style.container} style={{ color: `${color}` }}>
            <span >{name}</span>
            <span >{price}</span>
        </div>
    )
}