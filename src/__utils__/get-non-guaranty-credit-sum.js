import addMonths from 'date-fns/addMonths'
import getDaysInYear from 'date-fns/getDaysInYear'
import isSameYear from 'date-fns/isSameYear'
import startOfYear from 'date-fns/startOfYear'
import differenceInDays from 'date-fns/differenceInDays'

const NOW = new Date()

export const getNonGuarantyCreditSum = ({ creditSum, rateGuarantyPeriodMonths, promoPerMonth, rate }) => {
    let processingCreditSum = creditSum
    for (let i = 1; i <= rateGuarantyPeriodMonths; i += 1) {
        const thisMonth = addMonths(NOW, i - 1)
        const nextMonth = addMonths(NOW, i)
        const diffInSameDays = differenceInDays(nextMonth, thisMonth)
        let daysKoeff = diffInSameDays / getDaysInYear(thisMonth)
        if (!isSameYear(thisMonth, nextMonth)) {
            daysKoeff = ((differenceInDays(startOfYear(nextMonth), thisMonth) + 1) / getDaysInYear(thisMonth)) + (differenceInDays(nextMonth, startOfYear(nextMonth)) / getDaysInYear(nextMonth))
        }
        const thisMonthAddValue = processingCreditSum * (rate / 100) * daysKoeff
        processingCreditSum = parseFloat(processingCreditSum) + thisMonthAddValue - promoPerMonth
    }
    return processingCreditSum
}
