import React from 'react'
import styled from 'styled-components'
const ScoreContainer = styled.div`
  text-align:center;
 max-width: 170px;
   h1{
    font-size: 100px;
    line-height: 100px;
  }
   p{
    font-size:24px;
    font-weight: 500;
  }
`

export default function Totle() {
  return (
    <ScoreContainer> 
      <h1>0</h1>
      <p>Totle score </p>
    </ScoreContainer>
  )
}