import React from 'react'

import { Box } from '../styled'

export default {
  title: 'Typography',
}

export const Headings = () => (
  <>
    <Box as="h1" fontFamily="title" fontSize="h1" textTransform="uppercase">
      Heading 1: Survivor Scoreboard
    </Box>
    <Box as="h2" fontFamily="title" fontSize="h2" textTransform="uppercase">
      Heading 2: Survivor Scoreboard
    </Box>
    <Box as="h3" fontFamily="title" fontSize="h3" textTransform="uppercase">
      Heading 3: Survivor Scoreboard
    </Box>
    <Box as="h4" fontFamily="title" fontSize="h4" textTransform="uppercase">
      Heading 4: Survivor Scoreboard
    </Box>
  </>
)

export const Paragraphs = () => (
  <>
    <Box as="p" mb="base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur vitae
      pariatur odio assumenda quas reprehenderit, ad mollitia consectetur sit
      illo consequuntur qui! Aspernatur, ducimus. Quia obcaecati voluptas
      perspiciatis soluta voluptatem!
    </Box>
    <Box as="p">
      Lorem ipsum dolor sit amet <a href="#0">consectetur adipisicing elit</a>.
      Eum totam debitis ipsum id hic natus iusto possimus omnis esse aut quis,
      laboriosam tempore laudantium excepturi vero, minus eveniet quasi in.
    </Box>
  </>
)
