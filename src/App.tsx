import React from 'react'
import { ThemeProvider } from '@emotion/react'

import API from './__data__/api.json'
import { Header } from './components/header'

import { AppStyled, ContentStyled, theme } from './common'

export const App = () => (
    <ThemeProvider theme={theme}>
        <AppStyled>
            <ContentStyled>
                <Header />
            </ContentStyled>
        </AppStyled>
    </ThemeProvider>
)
