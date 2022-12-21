import style from './ArchiveTable.module.scss'
import React, { FC, useContext } from 'react'
import { ArchiveContext } from '../../context/ArchiveContext'

export const ArchiveTable: FC = () => {
    const { archive } = useContext(ArchiveContext)
    return (
        <div className={style.container}>
            <div className={style.row}>
                <span className={style.cell}>Side</span>
                <span className={style.cell}>Price</span>
                <span className={style.cell}>Instrument</span>
                <span className={style.cell}>Volume</span>
                <span className={style.cell}>Timestamp</span>
            </div>
            <hr color='border' />
            {archive.length ? archive.map((item, idx) => {
                return (
                    <div className={style.row} key={idx}>
                        <span color={item.side} className={style.cell}>{item.side}</span>
                        <span className={style.cell}>{item.price}</span>
                        <span className={style.cell}>{item.instrument}</span>
                        <span className={style.cell}>{item.volume}</span>
                        <span className={style.cell}>{item.timestamp}</span>
                    </div>
                )
            }) :
                <span className={style.noData}>Операций с валютой еще не было...</span>
            }

        </div>
    )
}