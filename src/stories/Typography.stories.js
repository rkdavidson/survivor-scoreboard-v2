import React from 'react'

import { Box } from '../styled'

export default {
  title: 'Typography',
}

export const Headings = () => (
  <>
    <Box as="h1">Heading 1</Box>
    <Box as="h2">Heading 2</Box>
    <Box as="h3">Heading 3</Box>
    <Box as="h4">Heading 4</Box>
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
