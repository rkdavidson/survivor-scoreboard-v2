import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'src/styled'

export default function RankingsDashboard(props) {
  const data = useStaticQuery(graphql`
    query RankingsDashboard {
      allSeasons {
        nodes {
          id
          cast {
            age
            hometown
            id
            name
          }
          tribes {
            id
            members
          }
        }
      }
    }
  `)

  console.log('[rkd] data:', data)

  return (
    <Box as="main">
      <Box as="h1">RankingsDashboard</Box>
      <pre style={{ fontSize: '14px' }}>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  )
}
