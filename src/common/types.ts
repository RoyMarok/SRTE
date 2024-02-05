import React from "react"

export type Sizes = 'sm' | 'md' | 'lg' | 'body1' | 'body2' | 'caption'
export type FontWeights = 'semibold' | 'medium' | 'regular'
export type Aligns = 'ledt' | 'center' | 'right'

export interface ColorsType {
    primary: string
    secondary: string
    tetriary: string
    transparent: string
    white: string
    error: string
    red: string
    blue: string
}

export interface FontType {
    fontSize: string
    fontFamily: string
    fontWeight: FontWeights
}
export interface SizeType {
    fontSize: string
    lineHeight: string
}

export interface ThemeType {
    colors: ColorsType
    font: FontType
    commonRadius: number
    baseFontSize: number
    gridBase: number
    textAlign: Aligns
    sizes: Record<Sizes, SizeType>
}

export interface TypographyProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'size'> {
    theme?: ThemeType
    fontWeight?: FontWeights
    children?: React.ReactNode
    as?: keyof JSX.IntrinsicElements
    colorScheme?: keyof ColorsType
    size?: Sizes
}
