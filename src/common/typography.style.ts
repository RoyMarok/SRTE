import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'

import type { TypographyProps, ThemeType, ColorsType, Sizes } from './types'
import { REGULAR } from '../__utils__/constants'

const typographyCommonStyle = ({ theme }: { theme?: ThemeType }): SerializedStyles => css`
    font-family: ${theme?.font?.fontFamily};
    text-align: ${theme?.textAlign};
`

const fontWeightStyle = ({ fontWeight = REGULAR }): SerializedStyles => css`
    font-weight: ${fontWeight};
`

const getColor = ({ theme, colorScheme = 'primary' }: { theme?: ThemeType, colorScheme?: keyof ColorsType }) => css`
    color: ${theme?.colors?.[colorScheme as keyof ColorsType]};
`

const getFontSize = ({ theme, size = 'md' }: { theme?: ThemeType, size?: Sizes }) => css`
    font-size: ${theme?.sizes?.[size]?.fontSize};
    line-height: ${theme?.sizes?.[size]?.lineHeight};
`

export const TypographyStyled = styled.p<TypographyProps>(
    typographyCommonStyle,
    fontWeightStyle,
    getColor,
    getFontSize,
)