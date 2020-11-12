import React from 'react'
import { addDecorator } from '@storybook/react'

import { AppProvider } from '../src/providers'
import { Box, GlobalStyles } from '../src/styled'

addDecorator(story => (
  <AppProvider>
    <GlobalStyles />
    <Box p="xl">{story()}</Box>
  </AppProvider>
))
