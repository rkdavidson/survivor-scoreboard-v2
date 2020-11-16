import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'src/styled'

export default function RankingsDashboard(props) {
  // const data = {}
  const data = useStaticQuery(graphql`
    query RankingsDashboard {
      season {
        id
        details {
          country
          displayDate
        }
        game(id: "home") {
          teams {
            id
            name
            points
            members {
              id
              name
              status {
                hasFire
                points
              }
            }
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
