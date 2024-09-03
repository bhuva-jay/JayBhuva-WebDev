import React,{useState} from 'react'
import Totle from './Totle'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'

const MainComponets = styled.div`
padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`
export default function GamePlay() {
  const [score , setScore] = useState()
  const [selectednum ,setSelectednum]= useState()
  const [currentDice, setCurrentDice ] = useState(1);

console.log('currentDice       ', currentDice)



  const randomGanret = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };

  const roleDice = () => {
    const randomNum = randomGanret(1, 7);
    setCurrentDice((prev)=>randomNum);
  if(selectednum === randomNum){
    setScore((prev)=> prev+
  randomNum)
  }else{
    setScore((prev)=>prev -2)
  }
    
  };


  return (
    <MainComponets>
      <div className='top_section'>
      <Totle/>
      <NumberSelect selectednum={selectednum} setSelectednum={setSelectednum}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}/>
    </MainComponets>
  )
}
// https://www.youtube.com/watch?v=DY9LK7mq86s&t=4074s this is yt video
