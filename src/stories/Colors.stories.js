import React from 'react'

import { Box } from 'src/styled'

export default {
  title: 'Colors',
}

const Swatch = (props = {}) => (
  <Box
    border="1px solid"
    borderColor="transparent"
    size="50px"
    m="xs"
    {...props}
  />
)

export const Default = () => (
  <Box display="flex">
    <Swatch bg="primary" />
    <Swatch bg="bg" border="1px solid" borderColor="neutrals.300" />
    <Swatch bg="fg" />
  </Box>
)

export const Neutrals = () => (
  <Box display="flex">
    {Array.from({ length: 9 }).map((v, i) => (
      <Swatch key={i} bg={`neutrals.${i + 1}00`} />
    ))}
  </Box>
)
