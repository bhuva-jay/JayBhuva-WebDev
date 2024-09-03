import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {
  const  [isgameStarted ,setIsgameStarted ]=useState(true)
  const togglegameplay = ()=>{
    setIsgameStarted(prev => !prev)
  } 

  return (
   <>
     {
      isgameStarted?<GamePlay/>:  <StartGame toggle={togglegameplay}/>
     }
   </>  
  );
}

export default App;
