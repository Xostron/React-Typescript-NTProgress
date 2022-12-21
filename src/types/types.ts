export interface ILink {
    name: string,
    icon: string,
    to: string,
    type: string,
    disabled: boolean
}

export interface ICurrency {
    instrument: string;
    price: number;
    coef: number;
}

export interface ITicker extends ICurrency {
    side: string;
}

export interface IInputText {
    name: string,
    placeholder?: string,
    autoFocus?: boolean,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export interface IArchive {
    side: string;
    price: number;
    instrument: string;
    volume: string;
    timestamp: string;
}