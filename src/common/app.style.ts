import styled from '@emotion/styled'
import { css } from '@emotion/react'

import type { ThemeType } from './types'


export const AppStyled = styled.div(({ theme }: { theme?: ThemeType }) => css`
    background-color: ${theme?.colors?.white};
`)
