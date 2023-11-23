import { MARKET_PAGES } from '../utils/api'

export type DASHBOARD_CARD = {
    title: string
    description: string
    imgUrl: string,
    pageName: `/market/${MARKET_PAGE}`
}

export enum PAGES {
    accesorios = 1,
    tops,
    sport_chic,
    verano,
    joyeria,
    exclusivos,
    pijamas,
    jeans,
    conjuntos
}

export type API_RESPONSE = {
    precio: number,
    imgUrl: string,
    srcUrl: string,
    disponibilidad: string | number;
    descuento?: number
}

export type MARKET_PAGE = typeof MARKET_PAGES[number]