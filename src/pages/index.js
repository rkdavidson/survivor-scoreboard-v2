import React from 'react'
import { graphql } from 'gatsby'

import { App, RankingsDashboard } from 'src/components'
import { Box } from 'src/styled'

export default function Home({ data }) {
  return (
    <App>
      <Box as="h1">Home</Box>
      <Box as="p">And how about some placeholder text?</Box>
      <RankingsDashboard />
    </App>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
