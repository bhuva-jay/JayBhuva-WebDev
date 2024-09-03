import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
height:72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.isSelect?"black" : "white"};
color:${(props) => props.isSelect?"white" : "black"} ;
`
const NumSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:end;
    
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;


export default function NumberSelect(
  {selectednum ,setSelectednum}
) {
   const arrayNum = [1,2,3,4,5,6]  
  return (
    <NumSelectorContainer>
      <div className="flex">
        {arrayNum.map((value, i) => (
          <Box
            isSelect={value === selectednum}
            key={i}
            onClick={() => setSelectednum(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selecte Number</p>
    </NumSelectorContainer>

  )
}
