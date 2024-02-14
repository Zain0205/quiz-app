import { useState } from "react";
import QUESTION from "../question";

import Timer from './Timer'
import Answer from './Answer'

function Question({index, selectQuestion, skipQuestion}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  const handleSelectAnswer = (ans) => {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: QUESTION[index].answers[0] === ans 
      })

      setTimeout(() => {
        selectQuestion(ans)
      }, 2000)
    }, 1000)
  }
  
  let asnwerState = ''

  if(answer.selectedAnswer && answer.isCorrect != null){
    asnwerState = answer.isCorrect ? 'correct' : 'wrong'
  } else if (answer.selectedAnswer){
    asnwerState = "answered"
  }
  return (
    <>
      <Timer timeout={10000} onTimeOut={skipQuestion} />
      <h1 className="text-2xl font-semibold">{QUESTION[index].question}</h1>
      <Answer answers={QUESTION[index].answers} userAsnwer={answer.selectedAnswer} asnwerState={asnwerState} onAnswer={handleSelectAnswer} />
    </>
  );
}

export default Question;
