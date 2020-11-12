import React from 'react'

import { Box } from 'src/styled'

export const H1 = (props = {}) => (
  <Box
    as="h1"
    fontFamily="title"
    fontSize="h1"
    textTransform="uppercase"
    {...props}
  />
)

export const H2 = (props = {}) => (
  <Box
    as="h2"
    fontFamily="title"
    fontSize="h2"
    textTransform="uppercase"
    {...props}
  />
)

export const H3 = (props = {}) => (
  <Box as="h3" fontFamily="title" fontSize="h3" {...props} />
)

export const H4 = (props = {}) => (
  <Box as="h4" fontFamily="title" fontSize="h4" {...props} />
)
