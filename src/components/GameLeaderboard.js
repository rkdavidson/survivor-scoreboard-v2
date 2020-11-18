import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'src/styled'

import TeamLeaderboardRow from './TeamLeaderboardRow'

const sortByHighestPoints = (a, b) => b.points - a.points

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

  const teamsSorted = data.season.game.teams.sort(sortByHighestPoints)
  console.log('[rkd] GameLeaderboard teamsSorted:', teamsSorted)

  return (
    <Box as="main">
      <Box as="h1">GameLeaderboard</Box>
      <Box>
        {teamsSorted.map((team, index) => (
          <TeamLeaderboardRow key={team.id} rank={index + 1} team={team} />
        ))}
      </Box>
    </Box>
  )
}
