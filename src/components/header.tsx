import React from 'react'

import { getMonthlyPayment, getNonGuarantyCreditSum } from '../__utils__'
import { SEMIBOLD } from '../__utils__/constants'
import type { FontWeights } from '../common/types'
import { Typography, PanelStyled } from '../common'


interface HeaderProps {
    rate?: number
    creditSum?: number
    term?: number
    rateGuarantyPeriodMonths?: number
    rateNextNew?: number
    rateNextOld?: number
    rateNonGuaranty?: number
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {
        rate = 0,
        creditSum = 0,
        term = 0,
        rateGuarantyPeriodMonths = 0,
        rateNextNew = 0,
        rateNextOld = 0,
        rateNonGuaranty = 0,
    } = props

    const promoPerMonth = getMonthlyPayment({
        rate,
        creditSum,
        term
    })

    const promoPerMonthStrict = getMonthlyPayment({
        rate,
        creditSum,
        term,
        ceil: false
    })

    const commonPerMonthParams = {
        creditSum: getNonGuarantyCreditSum({
            creditSum,
            rateGuarantyPeriodMonths,
            promoPerMonth: promoPerMonthStrict,
            rate
        }),
        term: term - rateGuarantyPeriodMonths
    }

    const perMonthNew = getMonthlyPayment({
        rate: rateNextNew,
        ...commonPerMonthParams
    })

    const perMonthOld = getMonthlyPayment({
        rate: rateNextOld,
        ...commonPerMonthParams
    })

    const perMonthNonGuaranty = getMonthlyPayment({
        rate: rateNonGuaranty,
        ...commonPerMonthParams
    })

    return (
        <PanelStyled>
            <Typography fontWeight={SEMIBOLD as FontWeights} colorScheme="primary" size="lg">{'Заявка на автокредит'}</Typography>
            {/* Сумма кредита */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Срок кредита */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Тип Авто */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Льготный период */}
            {/* Ставка */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Платёж */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Постльготный период */}
            {/* Ставка */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
            {/* Платёж */}
            <>
                <Typography>{/* заголовок поля */}</Typography>
                <Typography>{/* значение поля */}</Typography>
            </>
        </PanelStyled>
    )
}
