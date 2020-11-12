import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../config/theme'

// The <ProviderComposer> component is used to avoid the annoyance of
// having an endless nesting of Provider components wrapping the root-level
// <App> component, while still providing the flexibility of adding multiple
// Providers throughout the app for shared state management.
function ProviderComposer(props = {}) {
  return props.contexts.reduceRight(
    (kids, parent, idx) =>
      React.cloneElement(parent, {
        key: idx,
        children: kids,
      }),
    props.children
  )
}

function AppProvider(props = {}) {
  /* eslint-disable react/jsx-key */
  /* Disabling this here because the `key` is passed in the ProviderComposer. */
  const contexts = [<ThemeProvider theme={theme} />]

  return (
    <ProviderComposer contexts={contexts}>{props.children}</ProviderComposer>
  )
}

ProviderComposer.propTypes = {
  contexts: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
}

export default AppProvider
