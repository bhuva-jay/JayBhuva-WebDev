import React from 'react';
import styled from 'styled-components';
import dices from '../images/dices.png';

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items:center; 

  h1 {  
    font-size: 96px;
    white-space:nowrap;
  }
`

const Button = styled.button`

  color: white;
  padding:10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width:220px;
  border: none;
  font-size: 16px;
  border:1px solid transparent;
  transition:0.4s background ease-in;
 cursor: pointer;
  &:hover{
    background:white;
     border:1px solid black;
     color:black;
     transition:0.3s background ease-in;
     
  }
`;
     export default function StartGame({toggle}) {
  return (
    <Container>
      <div>
      <img src={dices}/>
      </div>
      <div>
      <h1 className='content'>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}