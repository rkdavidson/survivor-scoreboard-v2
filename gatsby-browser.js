import React from 'react'
import 'fontsource-big-shoulders-stencil-display/800.css'
import 'fontsource-underdog/400.css'
import 'fontsource-neucha/400.css'

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
