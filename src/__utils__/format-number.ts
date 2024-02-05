import IMask from 'imask'

import { makeMoneyMask } from './make-money-mask'

const defalutMoneyMask = makeMoneyMask({})

export const formatNumber = (value: number, mask = defalutMoneyMask): string =>
    IMask.pipe(value.toString(), mask) as string
