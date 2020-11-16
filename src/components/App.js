import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'src/styled'

function App(props = {}) {
  return (
    <Box as="main" maxWidth="800px" mx="auto" py="xl">
      {props.children}
    </Box>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
}

export default App
