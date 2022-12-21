import style from './Ticker.module.scss'
import React, { FC, useState } from 'react'
import { DropdownV1 } from '../../UI/dropdown/DropdownV1'
import { Price } from '../price/Price'
import { ICurrency, ITicker } from '../../../types/types'
import { MyModal } from '../../UI/modal/MyModal'
import { ModalBuySell } from '../../modal-buy-sell/ModalBuySell'



// mock data - валюты
const currency: ICurrency[] = [
    { name: 'USD/RUB TOM', price: 68.8750, coef: 5 },
    { name: 'USD/EUR TOM', price: 0.94162, coef: .15 },
    { name: 'USD/GBP TOM', price: 0.8219, coef: .11 },
    { name: 'USD/CNY TOM', price: 6.98, coef: 1 },
    { name: 'USD/TRY TOM', price: 18.66, coef: 2 },
    { name: 'USD/CHF TOM', price: 0.9278, coef: .15 },
    { name: 'RUB/CNY TOM', price: 0.94162, coef: 3 },
]
// список наименований валют для dropdown (принимает на вход массив строк)
const options = currency.map((val) => val.name)




export const Ticker: FC = () => {
    // Селектор
    const [select, setSelect] = useState<ICurrency>(currency[0])
    // вызов модального окна
    const [visible, setVisible] = useState<boolean>(false)
    // данные тикера для модального окна 
    const [ticker, setTicker] = useState<ITicker>({} as ITicker)

    const handlerChange = (option: any) => {
        let pairCurrency = currency.filter(val => val.name === option)
        setSelect(pairCurrency[0])
    }

    const handlerBuySell = (type: string, name: string, price: number) => {
        setTicker({
            type: type,
            name: name,
            price: price,
            coef: 0
        })
        setVisible(!visible)
        console.log(type, name, price)
    }

    return (
        <div className={style.container}>
            <DropdownV1
                options={options}
                value={select.name}
                onChange={handlerChange}
            />
            <Price
                name={select.name}
                price={select.price}
                coef={select.coef}
                handler={handlerBuySell}
            />
            <MyModal visible={visible} setVisible={setVisible}>
                <ModalBuySell props={ticker} />
            </MyModal>
        </div>
    )
}