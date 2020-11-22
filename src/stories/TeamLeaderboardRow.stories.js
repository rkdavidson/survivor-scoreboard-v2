import React from 'react'

import TeamLeaderboardRow from 'src/components/TeamLeaderboardRow'

export default {
  title: 'TeamLeaderboardRow',
  component: TeamLeaderboardRow,
}

const mockTeam = {
  name: 'Ryan',
  members: [
    {
      id: 'blah',
      name: 'Blah',
      status: {
        hasFire: true,
        points: 0,
      }
    }
  ]
}

export const Default = () => (
  <TeamLeaderboardRow rank={1} team={mockTeam}/>
)

export const NoRank = () => (
  <TeamLeaderboardRow team={mockTeam}/>
)
