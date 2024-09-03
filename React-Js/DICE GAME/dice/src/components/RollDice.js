import React, { useState } from 'react';
import styled from 'styled-components';

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  p {
    font-style: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;

export default function RollDice({currentDice,roleDice}) {


  return (
    <DiceContainer>
      <div onClick={roleDice} className="dice">
        <img src={`/images/dice/dice_${currentDice}.png`}/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}