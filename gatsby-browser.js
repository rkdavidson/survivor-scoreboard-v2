import React from 'react'

import { AppProvider } from './src/providers'

import { GlobalStyles } from './src/styled'

export const wrapRootElement = ({ element }) => (
  <AppProvider>
    <>
      <GlobalStyles />
      {element}
    </>
  </AppProvider>
)
