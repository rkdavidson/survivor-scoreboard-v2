import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'src/styled'

const Card = props => {
  return (
    <Box bg="neutrals.700" borderRadius="base" p="base" {...props}>
      {props.children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}
Card.defaultProps = {}

export default Card
