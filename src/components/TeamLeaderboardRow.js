import React from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'

import { Box } from 'src/styled'

import { CastMember } from 'src/propTypes'

// const orderByHasFire = (a, b) => {
//   // return a.status.hasFire && b.status.hasFire
//   if (a.status.hasFire === b.status.hasFire) return 0
//   if (a.status.hasFire && !b.status.hasFire) return -1
//   if (!a.status.hasFire && b.status.hasFire) {
//     if (a.status)
//   }
// }

const TeamMemberListItem = props => {
  const {
    name,
    status: { hasFire, points },
  } = props.member

  return (
    <li>
      {name} {hasFire ? '🔥' : `💨 ${points} pts`}
    </li>
  )
}

export default function TeamLeaderboardRow(props) {
  console.log('[rkd] TeamLeaderboardRow props:', props)

  const sortedMembers = orderBy(
    props.team.members,
    ['status.hasFire', 'status.points'],
    ['desc', 'desc']
  )

  return (
    <Box>
      <Box as="h4" fontWeight="bold">
        Team: {props.team.name} — {props.team.points}
      </Box>
      <Box as="ul" pl="l" mb="base" fontSize="base">
        {sortedMembers.map(member => (
          <TeamMemberListItem key={member.id} member={member} />
        ))}
      </Box>
    </Box>
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
