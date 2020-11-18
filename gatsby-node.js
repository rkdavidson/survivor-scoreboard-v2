const seasons = require('./data/seasons')
console.log('[rkd] seasons:', seasons)

exports.sourceNodes = ({ actions, createContentDigest }) => {
  seasons.forEach(season => {
    const { id, ...seasonFields } = season

    const node = {
      id: season.id,
      ...seasonFields,
      internal: {
        type: 'Season',
        contentDigest: createContentDigest(season),
      },
    }

    actions.createNode(node)
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  createFieldExtension({
    name: 'castMember',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          const parentNode = context.nodeModel.findRootNodeAncestor(source)

          return source.members.map(id => {
            return (
              parentNode.cast.find(castMember => castMember.id === id) || null
            )
          })
        },
      }
    },
  })

  createFieldExtension({
    name: 'teams',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          const parentNode = context.nodeModel.findRootNodeAncestor(source)

          return parentNode.games.map(
            game =>
              game.teams.find(team => team.members.includes(source.id)) || null
          )
        },
      }
    },
  })

  createFieldExtension({
    name: 'team',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          const parentNode = context.nodeModel.findRootNodeAncestor(source)
          const game = parentNode.games.find(game => game.id === args.gameId)

          return game.teams.find(team => team.members.includes(source.id))
        },
      }
    },
  })

  createFieldExtension({
    name: 'gameFromTeamId',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          const parentNode = context.nodeModel.findRootNodeAncestor(source)

          return parentNode.games.find(game =>
            Boolean(game.teams.find(team => team.id === source.id))
          )
        },
      }
    },
  })

  createFieldExtension({
    name: 'gameById',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          const parentNode = context.nodeModel.findRootNodeAncestor(source)

          return parentNode.games.find(game => game.id === args.id)
        },
      }
    },
  })

  createFieldExtension({
    name: 'teamsSorted',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context) {
          return context.nodeModel.runQuery({
            query: {
              sort: {
                fields: args.sort.fields,
                order: [args.sort.order],
              },
            },
            type: 'SeasonGamesTeams',
          })
        },
      }
    },
  })

  createTypes(`
    type Season implements Node {
      game(id: ID!): SeasonGames @gameById
    }

    type SeasonTribes implements Node {
      members: [SeasonCast] @castMember
    }

    type SeasonGamesTeams implements Node {
      game: SeasonGames @gameFromTeamId
      members: [SeasonCast] @castMember
    }

    type SeasonCast implements Node {
      teams: [SeasonGamesTeams] @teams
      team(gameId: ID!): SeasonGamesTeams @team
    }
  `)
}
