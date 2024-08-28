import React, { useState } from 'react';
import Qustion_list from "./Qustion_list"
import  '../Componets/Quize.css'

export default function Quize() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [ cocrectAns , setCocrectAns] =useState(null);
  const [score ,setScore] = useState(0)
  const [questions, setQuestions] = useState([
    {
      question: "What is the correct command to create a new React project?",
      options: ['npx create-react-app  ', 'npx create-react-app myReactApp', 'npm create-react-app myReactApp', 'Testing Tool'],
      answer: "npx create-react-app myReactApp"
    },
    {
      question: "What does myReactApp refer to in the following command?",
      options: ['The type of app to create   ', 'A reference to an existing app ', 'The name you want to use for the new app', 'The directory to create the new app in'],
      answer: "The name you want to use for the new app"
    },
    {
      question: "What command is used to start the React local development server?",
      options: ['npm start  ', 'npm serve', 'npm build', 'npm run dev'],
      answer: "npm start  "
    },
    {
      question: "What is the default local host port that a React development server uses?",
      options: ['3500  ', '3000 ', '8080', '5000'],
      answer: "3000 "
    },
    {
      question: "What is the children prop?",
      options: ['A property that lets you set an object as a property', 'A property that lets you pass data to child components', 'A property that lets you nest components in other components  ', 'A property that adds child values to state'],
      answer: "A property that lets you nest components in other components "
    },
    {
      question: "Which keyword creates a constant in JavaScript?",
      options: ['const', 'var', 'constant', 'let'],
      answer: "const"
    },
    {
      question: "A copy of the 'real' DOM that is kept in memory is called what?",
      options: ['Shadow DOM  ', 'DOM', 'React DOM', 'Virtual DOM '],
      answer: "Virtual DOM "
    },
    {
      question: "Which operator can be used to conditionally render a React component?",
      options: [':: ', '||', '??', '&&'],
      answer: "&&"
    },
    {
      question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      options: ['index ', 'data', 'key  ', 'id'],
      answer: "key  "
    },
    {
      question: "What tool does React use to compile JSX?",
      options: ['JSX Compiler ', 'ReactDOM', 'React Router', 'Babel '],
      answer: "Babel "
    },
    {
      question: "How can you optimize performance for a function component that always renders the same way?",
      options: ['Use the shouldComponentUpdate lifecycle method', 'Use the useReducer Hook.', 'Wrap it in the React.memo higher-order component.', 'Use the useMemo Hook.'],
      answer: "Wrap it in the React.memo higher-order component."
    },
    {
      question: "What is 2 + 2",
      options: ['3', '4', '5', '6'],
      answer: "4"
    },

  ]);

 const handelclick=(options)=>{
  setCocrectAns(options)
  if(options === questions[currentQIndex].answer){
  setScore(score+1)
  }
 }

 const handelNext=()=>{
  setCurrentQIndex(currentQIndex+1)
  setCocrectAns(null)
 }
  return (
    <div className='App'>
      {currentQIndex < questions.length
      ?<div>
      <Qustion_list
        question={questions[currentQIndex].question}
        options={questions[currentQIndex].options}
        handelclick={handelclick}
        cocrectAns={cocrectAns}
      />
      <button disabled={cocrectAns === null} className={cocrectAns === null ?" button-disable": "button"}
      onClick={handelNext}>Next question</button>
    </div>:<div>
              <h1>You are score is {score}</h1> 
           </div>
      }
    </div>
  );
}