import React from 'react'

export default function Admin() {
  return (
    <div className="flex">
  <nav className="flex flex-col bg-gray-100 p-3 w-64">
    <a href="/admin" className="text-gray-600 hover:text-gray-900 py-2 block">Dashboard</a>
    <a href="/userquize" className="text-gray-600 hover:text-gray-900 py-2 block">All User Quizes</a>
    <a 
      onClick={() => { 
        localStorage.removeItem('LoggedInUserEmail'); 
        localStorage.removeItem('CurrentUserId'); 
        navigate('/login'); 
      }} 
      className="text-gray-600 hover:text-gray-900 py-2 block"
    >
      Logout
    </a>
  </nav>
  <div className="flex-1 p-3">
    <h1 className="text-3xl font-bold mt-5 mb-5">Welcome, Admin {username}!!</h1>
    <div className="bg-white p-4 shadow-md rounded-md mb-5">
      <h1 className="text-2xl font-bold mb-4">Add Exam</h1>
      <input
        type="text"
        placeholder="Enter subject"
        value={currentSubject}
        onChange={handleSubjectChange}
        className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <button 
        onClick={handleAddExam} 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Exam
      </button>
    </div>
    {showQuizForm && (
      <div className="bg-white p-4 shadow-md rounded-md mb-5">
        <h1 className="text-2xl font-bold mb-4">Add Quiz</h1>
        <form>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="question">Enter question:</label>
          <input
            type="text"
            id="question"
            value={newQuestion}
            onChange={handleQuestionChange}
            className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <br />
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="options">Enter options:</label>
          <ul>
            {newOptions.map((option, index) => (
              <li key={index} className="py-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(e, index)}
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="radio"
                  name="correctOption"
                  checked={correctOption === newOptions[index]}
                  onChange={() => handleCorrectOptionChange(index)}
                  className="ml-2"
                />
              </li>
            ))}
          </ul>
          <br />
          <button 
            onClick={handleAddQuestion} 
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add question
          </button>
        </form>
        <h2 className="text-2xl font-bold mt-4 mb-2">Questions:</h2>
        <ul>
          {exams.find((exam) => exam.id === currentExamId)?.questions.map((question, index) => (
            <li key={index} className="py-2">
              <h3 className="text-lg font-bold mb-3 mt-4">
                Question {index + 1}:
                <MdDelete 
                  className="ml-2 text-red-600 hover:text-red-900" 
                  onClick={() => handleDeleteQue(currentExamId, question.id)} 
                />
                <MdEdit 
                  className="ml-2 text-blue-600 hover:text-blue-900" 
                  onClick={() => handleEditQue(question)} 
                />
              </h3>
              <p className="text-gray-600">{question.question}</p>
              <ul>
                {question?.options?.length ? question.options.map((option, optionIndex) => (
                  <li                   key={optionIndex} 
                  className={`py-2 ${question.correctOption === option ? 'text-green-600' : ''}`}
                >
                  {optionLabels[optionIndex]}. {option}
                </li>
                )) : <></>}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )}
    <div className="bg-white p-4 shadow-md rounded-md mb-5">
      <h2 className="text-2xl font-bold mb-2">All Exams</h2>
      {exams.map((exam) => (
        <div key={exam.id} className="bg-gray-100 p-4 mb-5">
          <h3 className="text-lg font-bold">Subject: {exam.subject}</h3>
          <ul>
            {exam.questions.map((question, index) => (
              <li key={index} className="py-2">
                <h3 className="text-lg font-bold mb-3 mt-4">
                  Question {index + 1}:
                  <MdDelete 
                    className="ml-2 text-red-600 hover:text-red-900" 
                    onClick={() => handleDeleteQue(exam.id, question.id)} 
                  />
                  <MdEdit 
                    className="ml-2 text-blue-600 hover:text-blue-900" 
                    onClick={() => handleEditQue(question)} 
                  />
                </h3>
                <p className="text-gray-600">{question.question}</p>
                <ul>
                  {question?.options?.length ? question.options.map((option, optionIndex) => (
                    <li
                      key={optionIndex} 
                      className={`py-2 ${question.correctOption === option ? 'text-green-600' : ''}`}
                    >
                      {optionLabels[optionIndex]}. {option}
                    </li>
                  )) : <></>}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}
