import React, { FC, useContext } from 'react'
import { ArchiveTable } from '../components/archive-table/ArchiveTable'
import { ArchiveContext } from '../context/ArchiveContext'



const ArchivePage: FC = () => {
    return (
        <ArchiveTable />
    )
}

export default ArchivePage