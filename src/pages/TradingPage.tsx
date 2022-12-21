import React, { FC, useState } from 'react'
import { TimerUTC } from '../components/timer/TimerUTC'
import { DropdownV1 } from '../components/UI/dropdown/DropdownV1'

const options = ['USD/RUB TOM', 'USD/CAD TOM', 'USD/GPB TOM', 'USD/YAN TOM',
    'USD/EU TOM', 'USD/FIN TOM', 'USD/TU TOM', 'USD/KZ TOM',]

const TradingPage: FC = () => {
    const [select, setSelect] = useState<string>(options[0])
    return (
        <div>
            <TimerUTC />
            <DropdownV1 options={options} select={select} setSelect={setSelect} />
            <TimerUTC />
            <TimerUTC />
        </div>
    )
}

export default TradingPage