import React, { createContext } from 'react'
import { IArchive } from '../types/types'

interface IArchiveContext {
    archive: IArchive[],
    setArchive: (val: IArchive[]) => void
}

export const ArchiveContext = createContext<IArchiveContext>({} as IArchiveContext)