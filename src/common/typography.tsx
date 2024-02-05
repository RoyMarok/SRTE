import React from 'react'

import type { TypographyProps } from "./types"
import { TypographyStyled } from "./typography.style"

export const Typography = (props: TypographyProps): JSX.Element => <TypographyStyled {...props} />
