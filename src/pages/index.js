import React from 'react'
import { graphql } from 'gatsby'

import { App, GameLeaderboard } from 'src/components'
import { Box } from 'src/styled'

export default function Home({ data }) {
  return (
    <App>
      <GameLeaderboard />
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
