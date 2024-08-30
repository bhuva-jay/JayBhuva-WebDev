import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizePage() {
  const navigate=useNavigate()
    const start=()=>{
      navigate('/quize')
    }
  return (
    <div className="quiz-page">
      <h1>Start the Quiz</h1>
      <p>Good luck!</p>
      <button onClick={start} className="start-button">Start the React Quiz &gt;</button>
    </div>
  )
} 

