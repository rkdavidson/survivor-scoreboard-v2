import React from 'react'

import { Box, H1, H2, H3, H4 } from '../styled'

export default {
  title: 'Typography',
}

export const Headings = () => (
  <>
    <H1>Heading 1: Survivor Scoreboard</H1>
    <H2>Heading 2: Survivor Scoreboard</H2>
    <H3>Heading 3: Survivor Scoreboard</H3>
    <H4>Heading 4: Survivor Scoreboard</H4>
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
