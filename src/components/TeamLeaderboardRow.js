import React from 'react'

import { Box } from 'src/styled'

export default function TeamLeaderboardRow(props) {
  console.log('[rkd] TeamLeaderboardRow props:', props)

  return (
    <Box>
      <Box as="h6">Team: {props.team.name}</Box>
    </Box>
  )
}
