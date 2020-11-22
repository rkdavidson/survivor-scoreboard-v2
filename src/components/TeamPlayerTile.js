import React from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'

import { Box } from 'src/styled'

import { CastMember } from 'src/propTypes'
import { Card } from 'src/components/ui-kit'

const FloatingCircle = props => (
  <Box
    position="absolute"
    top={10}
    right={10}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    alignContent="center"
    bg={props.hasFire ? 'neutrals.900' : 'neutrals.900'}
    borderRadius={99}
    width={36}
    height={36}
    textAlign="center"
    lineHeight="tight"
    boxShadow="base"
    {...props}
  />
)

export default function TeamPlayerTile(props) {
  const {
    id,
    name,
    status: { hasFire, points },
  } = props.player
  return (
    <Card
      fontSize="base"
      bg={hasFire ? 'neutrals.700' : 'transparent'}
      opacity={hasFire ? 1 : 0.75}
      position="relative"
    >
      <Box
        display="flex"
        flexDirection="column"
        fontSize="base"
        alignItems="center"
        alignContent="center"
        height="100%"
      >
        <FloatingCircle hasFire={hasFire}>
          {hasFire && <Box as="span" lineHeight="tight" pt={4}>{`🔥`}</Box>}
          {!hasFire && (
            <Box
              as="span"
              color="white"
              pt={1}
              fontWeight="bold"
              fontFamily="title"
              textTransform="uppercase"
            >{`${points}`}</Box>
          )}
        </FloatingCircle>
        <Box
          as="img"
          src={`static/australia-2016/${id}.jpg`}
          borderRadius={99}
          mb="base"
        />
        <Box as="span" fontFamily="heading" textAlign="center">
          {name}
        </Box>
      </Box>
    </Card>
  )
}

TeamPlayerTile.propTypes = {
  player: CastMember,
}
