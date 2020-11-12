import React from "react"
import styled from "styled-components"

import "src/css/global.css"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
  background: blue;
`

export default function Home() {
  return <Container>Hello world!</Container>
}
