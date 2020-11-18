import PropTypes from 'prop-types'

export default PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.shape({
    hasFire: PropTypes.bool,
    points: PropTypes.number,
  }),
})
