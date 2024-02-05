import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { hexToRgb } from '../__utils__'
import type { ThemeType } from './types'

export const PanelStyled = styled.div(({ theme }: { theme?: ThemeType }) => css`
    margin: ${theme?.gridBase}px 0;
    background-color: ${theme?.colors?.white};
    position: relative;
    border-radius: ${theme?.commonRadius}px;
    box-shadow: 0px 1px 2px rgba(${hexToRgb(theme?.colors?.primary)}, 0.04), 0px 4px 8px rgba(${hexToRgb(theme?.colors?.primary)}, 0.16);
    transition: box-shadow 30ms linear;
`)
