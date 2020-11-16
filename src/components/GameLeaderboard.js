import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'src/styled'

import TeamLeaderboardRow from './TeamLeaderboardRow'

export default function GameLeaderboard(props) {
  // const data = {}
  const data = useStaticQuery(graphql`
    query GameLeaderboard {
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

  console.log('[rkd] GameLeaderboard data:', data)

  return (
    <Box as="main">
      <Box as="h1">GameLeaderboard</Box>
      <Box>
        {data.season.game.teams.map(team => (
          <TeamLeaderboardRow key={team.id} team={team} />
        ))}
      </Box>
      <pre style={{ fontSize: '14px' }}>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  )
}
