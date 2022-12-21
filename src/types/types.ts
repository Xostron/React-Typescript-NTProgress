export interface ILink {
    name: string,
    icon: string,
    to: string,
    type: string,
    disabled: boolean
}

export interface ICurrency {
    name: string;
    price: number;
    coef: number;
}

export interface ITicker extends ICurrency {
    type: string;
}

export interface IInputText {
    name: string,
    placeholder?: string,
    autoFocus?: boolean,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}