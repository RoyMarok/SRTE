import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { theme as defaultTheme } from './theme'
import type { ThemeType } from './types'
import {
    MEDIA_LG,
    MEDIA_MD,
    MEDIA_SM,
    COLUMNS_LG_WIDTH,
    COLUMNS_MD_WIDTH,
    COLUMNS_SM_WIDTH
} from '../__utils__/constants'

export const ContentStyled = styled.div(({ theme = defaultTheme }: { theme?: ThemeType }) => css`
    color: ${theme?.colors?.primary};
    font-size: ${theme?.font?.fontSize}px;
    font-family: ${theme?.font?.fontFamily};
    font-weight: ${theme?.font?.fontWeight};
    padding-bottom: ${theme?.gridBase * 3}px;
    margin: auto;
    input, h1, h2, h3, button {
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: ${theme?.colors.primary};
        }
    }
    @media ${MEDIA_LG} {
        width: calc(${COLUMNS_LG_WIDTH}px * 19);
    }
    @media ${MEDIA_MD} {
        width: calc(${COLUMNS_MD_WIDTH}px * 19);
    }
    @media ${MEDIA_SM} {
        width: calc(${COLUMNS_SM_WIDTH}px * 23);
    }
`)
