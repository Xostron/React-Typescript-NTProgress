import style from './Ticker.module.scss'
import React, { FC, useState } from 'react'
import { DropdownV1 } from '../../UI/dropdown/DropdownV1'
import { Price } from '../price/Price'
import { ICurrency, ITicker } from '../../../types/types'
import { MyModal } from '../../UI/modal/MyModal'
import { ModalBuySell } from '../../modal-buy-sell/ModalBuySell'

// mock data - валюты
const currency: ICurrency[] = [
    { instrument: 'USD/RUB TOM', price: 68.8750, coef: 5 },
    { instrument: 'USD/EUR TOM', price: 0.94162, coef: .15 },
    { instrument: 'USD/GBP TOM', price: 0.8219, coef: .11 },
    { instrument: 'USD/CNY TOM', price: 6.98, coef: 1 },
    { instrument: 'USD/TRY TOM', price: 18.66, coef: 2 },
    { instrument: 'USD/CHF TOM', price: 0.9278, coef: .15 },
    { instrument: 'RUB/CNY TOM', price: 0.94162, coef: 3 },
]
// mock data - для выпадающего списка
const options = currency.map((val) => val.instrument)

// Компонент выбора инструмента (валюты) и отображение стоимости
export const Ticker: FC = () => {
    // выбранная валюта из выпадающего списка
    const [select, setSelect] = useState<ICurrency>(currency[0])
    // вызов модального окна
    const [visible, setVisible] = useState<boolean>(false)
    // данные тикера для модального окна (side, price, instrument)
    const [ticker, setTicker] = useState<ITicker>({} as ITicker)
    // событие для выпадающего списка
    const handlerChange = (option: any) => {
        let pairCurrency = currency.filter(val => val.instrument === option)
        setSelect(pairCurrency[0])
    }
    // событие вызова модального окна (формы) для покупки валюты
    const handlerBuySell = (side: string, instrument: string, price: number) => {
        setTicker({
            side: side,
            instrument: instrument,
            price: price,
            coef: 0
        })
        setVisible(!visible)
        // console.log(side, name, price)
    }

    return (
        <div className={style.container}>
            <DropdownV1
                options={options}
                value={select.instrument}
                onChange={handlerChange}
            />
            <Price
                instrument={select.instrument}
                price={select.price}
                coef={select.coef}
                handler={handlerBuySell}
            />
            <MyModal visible={visible} setVisible={setVisible}>
                {ticker ? <ModalBuySell props={ticker} onClose={setVisible} /> : null}
            </MyModal>
        </div>
    )
}