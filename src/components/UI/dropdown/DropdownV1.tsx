import React, { useState, FC } from 'react'
import style from './DropdownV1.module.scss'
import { HandySvg } from 'handy-svg'
import iArrow from '../../../source/icons/bxs-down-arrow.svg'



interface IDropdownV1 {
    options: string[]
    select: string,
    setSelect: (select: string) => void
}

export const DropdownV1: FC<IDropdownV1> = ({ options, select, setSelect }) => {
    const [active, setActive] = useState<boolean>(false)
    const styleContent = [style.content]
    const styleIcon = [style.icon]
    if (active) {
        styleContent.push(style.activeContent)
        styleIcon.push(style.activeIcon)
    }

    return (

        <div className={style.dropdown}>
            {/* display default value + icon picker */}
            <div className={style.default}
                onClick={() => setActive(!active)}
            >
                <span className={style.name}>{select}</span>
                <span style={{ width: '16px' }}></span>
                <HandySvg className={styleIcon.join(' ')} src={iArrow} />
            </div>

            {/* dropdown list */}
            {<div className={styleContent.join(' ')}>
                {
                    options.filter((val) => val !== select).map((option, idx) =>
                        <div className={style.item}
                            key={idx}
                            onClick={() => {
                                setSelect(option)
                                setActive(!active)
                            }}
                        >
                            {option}
                        </div>
                    )
                }
            </div>}
        </div>

    )
}