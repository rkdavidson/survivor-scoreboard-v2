import React from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'
import { Box } from 'src/styled'

import { CastMember } from 'src/propTypes'
import { Card } from 'src/components/ui-kit'

import TeamPlayerTile from './TeamPlayerTile'

export default function TeamLeaderboardRow(props) {
  console.log('[rkd] TeamLeaderboardRow props:', props)

  const sortedMembers = orderBy(
    props.team.members,
    ['status.hasFire', 'status.points'],
    ['desc', 'desc']
  )

  return (
    <Card mb="l">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box
          as="h3"
          fontSize="h2"
          fontFamily="heading"
          fontWeight="bold"
          mb="l"
        >
          {`${props.rank}.)`} {props.team.name} {props.rank === 1 ? '🏆' : ''}
        </Box>
        <Box as="h3" fontSize="h2" fontFamily="title">
          {props.team.points} pts
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ _: '1fr', md: 'repeat(5, 1fr)' }}
        gridColumnGap="base"
      >
        {sortedMembers.map(member => (
          <TeamPlayerTile key={member.id} player={member} />
        ))}
      </Box>
    </Card>
  )
}

TeamLeaderboardRow.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    points: PropTypes.number,
    members: PropTypes.arrayOf(CastMember),
  }),
}
