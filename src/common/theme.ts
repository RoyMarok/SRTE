import { REGULAR } from '../__utils__/constants'
import type { ThemeType, FontWeights, Aligns } from './types'

export const commonRadius = 4
export const baseFontSize = 15
export const gridBase = Math.round(1.8 * baseFontSize)

const lightTheme = {
    primary: '#262626',
    secondary: 'rgba(38, 38, 38, 0.7)',
    tetriary: 'rgba(38, 38, 38, 0.55)',
    transparent: 'transparent',
    white: 'white',
    error: 'orangered',
    red: 'red',
    blue: 'blue',
}


const sizes = {
    sm: {
        fontSize: '13px',
        lineHeight: '16px'
    },
    md: {
        fontSize: '15px',
        lineHeight: '20px'
    },
    lg: {
        fontSize: '19px',
        lineHeight: '24px'
    },
    body1: {
        fontSize: '19px',
        lineHeight: '28px'
    },
    body2: {
        fontSize: '15px',
        lineHeight: '24px'
    },
    caption: {
        fontSize: '13px',
        lineHeight: '16px'
    }
}

const font = {
    fontSize: `${sizes['md'].fontSize}`,
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: REGULAR as FontWeights,
}

export const theme: ThemeType = {
    colors: lightTheme,
    font,
    commonRadius,
    baseFontSize,
    gridBase,
    textAlign: 'left' as Aligns,
    sizes
}
