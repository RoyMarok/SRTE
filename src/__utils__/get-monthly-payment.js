import { MONTHS } from "./constants"

export const getMonthlyPayment = ({
    rate,
    creditSum,
    term,
    ceil = true
}) => {
    const perMonthPercent = rate / MONTHS / 100
    const koeff = Math.pow(1 + perMonthPercent, term)
    const koeff2 = (perMonthPercent * koeff) / (koeff - 1)
    return ceil ? Math.ceil(creditSum * koeff2) : creditSum * koeff2
}
