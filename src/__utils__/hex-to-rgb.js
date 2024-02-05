import { HEX_RADIX } from '../__utils__/constants'

export const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `${parseInt(result[1], HEX_RADIX)}, ${parseInt(result[2], HEX_RADIX)}, ${parseInt(result[3], HEX_RADIX)}`
    : null
}
