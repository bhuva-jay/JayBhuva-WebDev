import React, { useState } from "react";
import Qustion_list from "./Qustion_list";
import "../Componets/Quize.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Quize() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [cocrectAns, setCocrectAns] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([
    {
      question: "What is the correct command to create a new React project?",
      options: [
        "A: npx create-react-app  ",
        "B: npx create-react-app myReactApp",
        "C: npm create-react-app myReactApp",
        "D: Testing Tool",
      ],
      answer: " B: npx create-react-app myReactApp",
    },
    {
      question: "What does myReactApp refer to in the following command?",
      options: [
        "A: The type of app to create   ",
        "B: reference to an existing app ",
        "C: The name you want to use for the new app",
        "D: The directory to create the new app in",
      ],
      answer: " C: The name you want to use for the new app",
    },
    {
      question:
        "What command is used to start the React local development server?",
      options: [
        "A: npm start  ",
        "B: npm serve",
        "C: npm build",
        "D: npm run dev",
      ],
      answer: "A: npm start  ",
    },
    {
      question:
        "What is the default local host port that a React development server uses?",
      options: ["A: 3500  ", "B: 3000 ", "C: 8080", "D:5000"],
      answer: "B: 3000 ",
    },
    {
      question: "What is the children prop?",
      options: [
        "A: A property that lets you set an object as a property",
        "B: A property that lets you pass data to child components",
        "C: A property that lets you nest components in other components  ",
        "D: A property that adds child values to state",
      ],
      answer:
        " C: A property that lets you nest components in other components ",
    },
    {
      question: "Which keyword creates a constant in JavaScript?",
      options: ["A: const", "B: var", "C: constant", "D: let"],
      answer: "A: const",
    },
    {
      question:
        "A copy of the 'real' DOM that is kept in memory is called what?",
      options: ["A: Shadow DOM  ", "B: DOM", "C: React DOM", "D: Virtual DOM"],
      answer: "D: Virtual DOM ",
    },
    {
      question:
        "Which operator can be used to conditionally render a React component?",
      options: ["A: :: ", "B: ||", "C: ??", "D: &&"],
      answer: "D: &&",
    },
    {
      question:
        "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      options: ["A: index ", "B: data", "C: key", "D: id"],
      answer: "C: key  ",
    },
    {
      question: "What tool does React use to compile JSX?",
      options: [
        "A: JSX Compiler ",
        "B: ReactDOM",
        "C: React Router",
        "D: Babel ",
      ],
      answer: "D: Babel ",
    },
    {
      question:
        "How can you optimize performance for a function component that always renders the same way?",
      options: [
        "A: Use the shouldComponentUpdate lifecycle method",
        "B: Use the useReducer Hook.",
        "C: Wrap it in the React.memo higher-order component.",
        "D: Use the useMemo Hook.",
      ],
      answer:"C: Wrap it in the React.memo higher-order component.",
    },
    {
      question: "What props will be available to the following component?    <Car {...props} />",
      options: [
        "A: only static ones ", 
        "B: all of them ", 
        "C: only updated ones", 
        "D: children"
      ],
      answer: "B: all of them ",
    },
    {
      question: "What is a common use case for ref?",
      options: [
          "A: To refer to another JavaScript file  ",
          "B: To bind the function",
          "C: To refer to a function",
          "D: To directly access a DOM node  "
         ],
      answer: "D: To directly access a DOM node ",
    },{
      question: "React can only render elements in the root document element.",
      options: [
        "False  ", 
        "True", 
        

      ],
      answer: "False ",
    },
    {
      question: "What is the correct syntax to import a Component from React?",
      options: [
        "A: import [ Component ] from 'react' ", 
        "B: import { Component } from 'react' ", 
        "C: import React.Component from 'react'", 
        "D: import Component from 'react'"
      ],
      answer: "B: import { Component } from 'react' ",
    },
    {
      question: "React separates the user interface into components. How are components combinded to create a user interface?",
      options: [
        "A: With webpack ", 
        "B: By nesting components ", 
        "C: By putting them in a folder structure", 
        "D: With code splitting"
      ],
      answer: "B: By nesting components ",
    },
    {
      question: "Although React Hooks generally replace class components, there are no plans to remove classes from React.",
      options: [
        " True ", 
        "False ", 
      ],
      answer: " True ",
    },
    {
      question: "Which of the following is NOT a rule for React Hooks?",
      options: [
        "A: Hooks can only be called inside React Function components", 
        "B: Hooks can be called in Class or Function components  ", 
        "C: Hooks cannot be conditional", 
        "D: Hooks can only be called at the top level of a component"
      ],
      answer: " B: Hooks can be called in Class or Function components   ",
    },
    {
      question: "What is 2 + 2",
      options: [
        "A: ", 
        "B: ", 
        "C: ", 
        "D: "
      ],
      answer: "c : ",
    },
  ]);
  
  const handelclick = (options) => {
    setCocrectAns(options);
    if (options === questions[currentQIndex].answer) {
      setScore(score + 2);
    }
  };

  const handelNext = () => {
    setCurrentQIndex(currentQIndex + 1);
    setCocrectAns(null);
  };

  const backQuize=()=>{
    navigate('/') 
  }
  return (
    <div className="App">
      {currentQIndex < questions.length ? (
        <div>
        
          <Qustion_list
            question={questions[currentQIndex].question}
            options={questions[currentQIndex].options}
            handelclick={handelclick}
            cocrectAns={cocrectAns}
          />
          <button
            disabled={cocrectAns === null}
            className={cocrectAns === null ? " button-disable" : "button"}
            onClick={handelNext}
          >
            Next question
          </button>
        </div>
      ) : (
        <div>
          <h1 style={{color:"white"}}> 19 of  You are score is {score}</h1>
          <button onClick={backQuize}> back Quize</button>
        </div>
      )}
    </div>
  );
}
