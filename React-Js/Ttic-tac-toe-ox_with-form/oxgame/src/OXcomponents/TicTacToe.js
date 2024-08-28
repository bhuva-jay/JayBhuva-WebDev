
// import React, { useState } from 'react'

// export default function TicTacToe() {
//     const [board , setBoard]=useState(Array(9).fill(null))
//     const[isxTurn , setIsxTurn]=useState(true)
//     const [winner , setWinner]= useState(null)
//     const rendersquare=(index)=>{
//       return(
//         <button className='square' onClick={()=>handelclick(index)}>{board[index]}</button>
//       )
//     }
//       const handelclick=(index)=>{
//         console.log('click', index)
//       const newbord = [...board];
//       newbord[index] = isxTurn ? <img src="http://nobodyintheworld.com/CX/c.png" height="40px" width="40px"/> : <img src='https://cdn.pixabay.com/photo/2015/08/27/10/26/sign-909929_1280.png' height="40px" width="40px"/>;
//       setBoard(newbord)
//       setIsxTurn(!isxTurn)
//       const winnerCombination = checkWinner( newbord)
//       if(winnerCombination){
//         setWinner(newbord[winnerCombination[0]])
//       }
//     }
//     const checkWinner = (newbord)=>{
//        const combination  = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],

//         [0,3,6],
//         [1,4,7],
//         [2,5,8],

//         [0,4,8],
//         [2,4,6]
//        ]
//        for( let i=0; i<combination.length; i++){
//          const [a ,b , c] = combination[i]
//          if(board[a] === board[b] && board[b] === board[c]){
//           return combination[i];
//          }
//         }
//         return(null)
//     }
//   return (
//     <>
//     <div className='bord'>
//      <div className='bord-row'>
//          {rendersquare(0)}
//          {rendersquare(1)}
//          {rendersquare(2)}
//      </div>
//      <div className='bord-row'>
//         {rendersquare(3)}
//         {rendersquare(4)}
//         {rendersquare(5)}
//      </div>
//      <div className='bord-row'>
//         {rendersquare(6)}
//         {rendersquare(7)}
//         {rendersquare(8)}
//      </div>
//      {winner && <div>{winner} is winner</div>}
//     </div>
//     </>
//   )
// }



import React, { useState } from 'react'

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  const renderSquare = (index) => {
    return (
      <button className='square' onClick={() => handleClick(index)}>
        {board[index] === 'X' ? <img src="http://nobodyintheworld.com/CX/c.png" height="90px" width="90px"/> : board[index] === 'O' ? <img src='https://cdn.pixabay.com/photo/2015/08/27/10/26/sign-909929_1280.png' height="90px" width="90px"/> : null}
      </button>
    )
  }
  const handleClick = (index) => {
    console.log('click', index)
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = isXTurn ? 'X' : 'O';
      setBoard(newBoard)
      setIsXTurn(!isXTurn)
      const winnerCombination = checkWinner(newBoard)
      if (winnerCombination) {
        setWinner(winnerCombination)
      }
    }
  }

  const checkWinner = (newBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i]
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null
  }
  const handelreset=()=>{
    setBoard(Array(9).fill(null))
    setWinner(null)
  }
  return (
    <>
    <div className='body_main'>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className='result'>      
        {winner && <div>Player {winner} wins!</div>}
        <button onClick={handelreset}>Reset</button>
      </div>
    </div>
    </>
  )
}
