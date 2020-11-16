module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'react-app',
  rules: {
    // TODO: Might want to revisit this, but there are too many
    // warnings to deal with right now.
    'react/forbid-foreign-prop-types': 'off',
    'import/no-anonymous-default-export': 'off',
  },
}
