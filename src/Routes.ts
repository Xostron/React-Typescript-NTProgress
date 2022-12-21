import React, { lazy } from "react";

const TradingPageL = lazy(() => import('./pages/TradingPage'))
const ArchivePageL = lazy(() => import('./pages/ArchivePage'))

const pages = [
    {
        Element: TradingPageL,
        path: '/'
    },
    {
        Element: ArchivePageL,
        path: '/archive',
    },
]
export default pages

