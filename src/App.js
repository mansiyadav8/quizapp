import './App.css';
import React, { useState } from 'react';
export default function App() {
  const questions =[
    {
      questionText: 'What is capital of India?',
      answerOptions: [
        { answerText: 'Mumbai', isCorrect: false},
        { answerText: 'Delhi', isCorrect: true},
        { answerText: 'Jaipur', isCorrect: false},
        { answerText: 'Chennai', isCorrect: false},
      ],
    },
    {
      questionText: 'Where is Taj Mahal?',
      answerOptions: [
        { answerText: 'Mumbai', isCorrect: false},
        { answerText: 'Delhi', isCorrect: false},
        { answerText: 'Jaipur', isCorrect: false},
        { answerText: 'Agra', isCorrect: true},
      ],
    },
    {
      questionText: 'How many rivers are in Punjab?',
      answerOptions: [
        { answerText: '5', isCorrect: true},
        { answerText: '3', isCorrect: false},
        { answerText: '2', isCorrect: false},
        { answerText: '4', isCorrect: false},
      ],
    },
    {
      questionText: 'When India got freedom?',
      answerOptions: [
        { answerText: '1947', isCorrect: true},
        { answerText: '1948', isCorrect: false},
        { answerText: '1949', isCorrect: false},
        { answerText: '1950', isCorrect: false},
      ],
    },
    {
      questionText: 'What is capital Rajasthan?',
      answerOptions: [
        { answerText: 'Mumbai', isCorrect: false},
        { answerText: 'Delhi', isCorrect: false},
        { answerText: 'Jaipur', isCorrect: true},
        { answerText: 'Chennai', isCorrect: false},
      ],
    },
    {
      questionText: 'Where is pune?',
      answerOptions: [
        { answerText: 'Maharastra', isCorrect: true},
        { answerText: 'Karnataka', isCorrect: true},
        { answerText: 'Tamil Nadu', isCorrect: false},
        { answerText: 'Goa', isCorrect: false},
      ],
    },
  ];

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore]= useState(false);

const [score,setScore] = useState(0);

const handleAnswerButtonClick=(isCorrect) => {
  if(isCorrect){
    setScore(score+1);
  }

  const nextQuestion = currentQuestion+1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
};
return (
  <div className="app">
    {showScore ?(
      <div className='score-section'> You scored {score} out of {questions.length}</div>
    ) :(
      <>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion+1}</span>/{questions.length}
        </div>
      <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption)=>(
        <button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
      </div>
      </>
    )}
    </div>
  );
}