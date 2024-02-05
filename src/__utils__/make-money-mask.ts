import type { Masked } from 'imask'

export type MakeMoneyMask = {
    scale?: number
    radix?: string
    padFractionalZeros?: boolean
    normilizeZeros?: boolean
    thousandsSeparator?: string
    signed?: boolean
    commit?: Masked<NumberConstructor>['commit']
}

export type IMaskFormat = { mask: NumberConstructor }
& Omit<MakeMoneyMask, 'signed'>

interface CreateMoneyMask {
    ({
        scale,
        radix,
        padFractionalZeros,
        thousandsSeparator,
        ...rest
    }: MakeMoneyMask): IMaskFormat
}

export const makeMoneyMask: CreateMoneyMask = ({
    scale = 2,
    radix = ',',
    padFractionalZeros = false,
    thousandsSeparator = '\u00a0',
    ...rest
} = {}) => ({
    mask: Number,
    scale,
    radix,
    padFractionalZeros,
    thousandsSeparator,
    ...rest
})
