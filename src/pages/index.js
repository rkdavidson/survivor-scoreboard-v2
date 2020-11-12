import React from 'react'

import { App } from 'src/components'
import { Box } from 'src/styled'

export default function Home() {
  return (
    <App>
      <Box as="h1">Home</Box>
      <Box as="p">And how about some placeholder text?</Box>
    </App>
  )
}
