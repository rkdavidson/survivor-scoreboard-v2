const seasons = require('./data/seasons')
console.log('[rkd] seasons:', seasons)

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  seasons.forEach(season => {
    const { id, ...seasonFields } = season

    const node = {
      id: createNodeId(`Season-${season.id}`),
      ...seasonFields,
      internal: {
        type: 'Seasons',
        contentDigest: createContentDigest(season),
      },
    }

    actions.createNode(node)
  })
}
